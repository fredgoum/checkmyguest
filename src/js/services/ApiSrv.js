const apiUrl = 'https://api.cmg.ovh:3000/testtech/alfred/1';

/**
 * Get room data with GET method
 */
async function getRoom() {
  let response = null;
  try {
    const res = await fetch(apiUrl);
    if (! res.ok) throw new Error(res.status);
    response = await res.json();
  } catch (error) {
    console.log(error);
  }
  return response;
}

/**
 * Update data with PUT method
 * @param {Object} user user infos to send
 */
async function updateRoom(user) {
  let response = null;
  const options = {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await fetch(apiUrl, options);
    if (! res.ok) throw new Error(res.status);
    response = res;
  } catch (error) {
    console.log(error);
  }
  return response;
}

window.apiSrv = {
  getRoom,
  updateRoom
};

export default window.apiSrv;
