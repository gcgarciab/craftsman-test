export default function findById(items: Array<any>, id: number | string) {
  return items.find((item) => item.id === id);
}
