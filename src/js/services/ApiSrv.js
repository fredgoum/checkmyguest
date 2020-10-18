const apiUrl = 'https://api.cmg.ovh:3000/testtech/alfred/';

/**
 * Get room datas with GET method
 * @param {Integer} roomId room id to send to api
 */
async function getRoom(roomId) {
  let response = [];
  try {
    const res = await fetch(`${apiUrl}${roomId}`);
    if (! res.ok) throw new Error(res.status);
    response = await res.json();
  } catch (error) {
    console.log(error);
  }
  return response;
}

/**
 * Update a room with PUT method
 * @param {Object} room room to update
 */
async function updateRoom(room) {
  let response = null;
  const options = {
    method: 'PUT',
    body: JSON.stringify(room),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await fetch(`${apiUrl}${room.id}`, options);
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
