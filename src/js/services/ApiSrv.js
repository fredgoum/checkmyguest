/**
 * Get room data from API datas with GET method
 * @param {Object} apiUrl url to send to api
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

/**
 * Update a bike with PUT method
 * @param {Object} room bike to update
 */
async function updateRoom(apiUrl, room) {
  let response = null;
  const url = `${apiUrl}/${room._id}`;
  const options = {
    method: 'PUT',
    body: JSON.stringify(room),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await fetch(url, options);
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
