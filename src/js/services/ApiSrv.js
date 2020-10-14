/**
 * Get room data from API datas
 */
async function getRoom(apiUrl) {
  let response = [];
  try {
    const res = await fetch(apiUrl);
    if (! res.ok) throw new Error(res.status);
    response = await res.json();
  } catch (error) {
    console.log(error);
  }
  return response;
}

window.apiSrv = {
  getRoom
};

export default window.apiSrv;
