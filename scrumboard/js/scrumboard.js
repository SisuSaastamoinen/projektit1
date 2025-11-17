autoSizeColumns();

function autoSizeColumns() {
  const columns = document.querySelectorAll("section");
  console.log(columns);
  const maxHeight = Math.max([...columns].clientHeight);
  console.log(maxHeight);
  columns.forEach((c) => {
    c.clienHeight = maxHeight;
  });
}
