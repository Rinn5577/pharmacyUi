export const urlFormatter = (
  page: number,
  search_by: string,
  ids?: Array<string>,
  name?: string
) => {
  let baseUrl = `?page=${page}`;
  if (search_by === "Id" && ids !== undefined) {
    let newUrlArray = [];
    for (const id of ids) {
      let urlSegment = `&ids=${id}`;
      newUrlArray.push(urlSegment);
    }
    return baseUrl + newUrlArray.join("");
  } else if (search_by === "Name" && name !== undefined) {
    return baseUrl + `&name=${name}`;
  } else return baseUrl;
};
