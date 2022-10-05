// https://gist.github.com/gordonbrander/2230317?permalink_comment_id=3443509#gistcomment-3443509
export const uid = () => {
  return (
    performance.now().toString(36) +
    Math.random().toString(36)
  ).replace(/\./g, '');
};
