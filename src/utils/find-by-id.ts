export default function findById(items: Array<any>, id: number) {
  return items.find((item) => item.id === id);
}
