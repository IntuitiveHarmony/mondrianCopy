const dropDivs = (divAmount) => {
  for (let i = 0; i < divAmount; i++) {
    const box = $("<div>")
      .addClass("box")
      .attr("id", `box-${i + 1}`)
      .appendTo(".container");
  }
};

$(() => {
  dropDivs(43);
});
