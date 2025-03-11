
export const availableNames = [
    "Prashant Saini",
    "Amit Saini",
    "Shubham Gareeb",
    "Viphul",
    "Himani",
    "Akanksha"
  ];
  
  const friendlyNames = {};
  
  /** Returns a friendly name for a given socket ID. **/
  export function getFriendlyName(id) {
    if (!friendlyNames[id]) {
      const randomIndex = Math.floor(Math.random() * availableNames.length);
      friendlyNames[id] = availableNames[randomIndex];
    }
    return friendlyNames[id];
  }
  