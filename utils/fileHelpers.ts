export const saveFile = async (href: any, fileName: string) => {
  const a = document.createElement("a");
  a.download = fileName;
  a.href = href;
  a.addEventListener("click", (e) => {
    setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
  });
  a.click();
};
