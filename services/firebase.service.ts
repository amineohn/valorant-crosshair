import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

export class Firebase {
  private options = {
    apiKey: "AIzaSyA2yh5PgzSByGIM5uhcHr1L8UBfY2Ef_lA",
    authDomain: "the-dome-7d546.firebaseapp.com",
    databaseURL:
      "https://the-dome-7d546-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "the-dome-7d546",
    storageBucket: "the-dome-7d546.appspot.com",
    messagingSenderId: "653285749652",
    appId: "1:653285749652:web:30e644e6741f5555141581",
    measurementId: "G-C4075P57Q6",
  };

  private defaultImage: string = "/static/images/blank-profile.png";

  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.options);
    }
  }

  public collection(collection: string) {
    return firebase.firestore().collection(collection);
  }

  public firestore() {
    return firebase.firestore();
  }

  public timeStamp(timestamp: string) {
    return firebase.firestore.Timestamp.fromDate(new Date(timestamp));
  }

  public async update(
    collection: string,
    documentPath: string,
    data: firebase.firestore.UpdateData
  ): Promise<void> {
    const collectionRef = this.collection(collection);
    const documentRef = collectionRef.doc(documentPath);
    await documentRef.update(data);
  }

  public async getProduct(id: string): Promise<any> {
    const collectionRef = this.collection("products");
    const documentRef = collectionRef.doc(id);
    const document = await documentRef.get();
    return document.data();
  }

  stateChanged(callback: (user: firebase.User | null) => void) {
    const auth = this.getAuth();
    auth.onAuthStateChanged(callback);
  }

  public async updateProduct(
    id: string,
    data: {
      name: string;
      price: number;
      description: string;
      image: string;
    }
  ): Promise<void> {
    const collectionRef = this.collection("products");
    const documentRef = collectionRef.doc(id);
    await documentRef.update(data);
  }

  public async create(
    collection: string,
    data: firebase.firestore.DocumentData
  ): Promise<void> {
    const collectionRef = this.collection(collection);
    await collectionRef.add(data);
  }

  photoUrl(): string | null | undefined {
    return this.user()?.photoURL;
  }

  defaultPhotoUrl(): string {
    return this.defaultImage;
  }

  public async delete(collection: string, documentPath: string): Promise<void> {
    const collectionRef = this.collection(collection);
    const documentRef = collectionRef.doc(documentPath);
    await documentRef.delete();
  }

  collectionId(collection: string) {
    return this.collection(collection).doc().id;
  }

  getAuth() {
    return firebase.auth();
  }

  async authenticate(email: string, password: string) {
    const auth = firebase.auth();
    await auth.signInWithEmailAndPassword(email, password);
  }

  async createUser(email: string, password: string) {
    const auth = firebase.auth();
    await auth.createUserWithEmailAndPassword(email, password);
  }

  async disconnect() {
    const auth = firebase.auth();
    await auth.signOut();
  }

  getId(): string | undefined {
    return firebase.auth().currentUser?.uid;
  }

  user(): firebase.User | null {
    return firebase.auth().currentUser;
  }
}
