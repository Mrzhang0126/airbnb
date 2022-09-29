import httpRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return httpRequest.get({
    url: "entire/list",
    params: {
      offset,
      size
    }
  })
}
