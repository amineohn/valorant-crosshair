export const VCurrencies = {
  VP: "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741", // VP
  RAD: "e59aa87c-4cbf-517a-5983-6e81511be9b7", // Radianite Points
  FAG: "f08d4ae3-939c-4576-ab26-09ce1f23bb37", // Free Agents
};

export const regions: { [key: string]: string } = {
  eu: "Europe",
  na: "North America",
  ap: "Asia-Pacific",
  kr: "Korea",
};

export const getAccessTokenFromUri = (uri: string) => {
  return (
    uri.match(
      /access_token=((?:[a-zA-Z]|\d|\.|-|_)*).*id_token=((?:[a-zA-Z]|\d|\.|-|_)*).*expires_in=(\d*)/
    ) as any
  )[1];
};
export function isTokenExpired(token: string) {
  const payload = token.split(".")[1];
  return JSON.parse(atob(payload)).exp < Date.now() / 1000;
}
