export default {
  searchList<T>(list: T[], searchTerm: string, keys: (keyof T)[]) {
    if (!searchTerm.trim()) return list;

    const lowerTerm = searchTerm.toLowerCase();
    return list.filter((item) =>
      keys.some((key) => {
        const value = item[key];
        return (
          typeof value === "string" && value.toLowerCase().includes(lowerTerm)
        );
      })
    );
  },
  sortByDate<T>(
    list: T[],
    dateKey: keyof T,
    order?: "newest" | "oldest" | null
  ) {
    if (!dateKey || !order) return list;
    return list.sort((a, b) => {
      const dateA = new Date(a[dateKey] as unknown as string);
      const dateB = new Date(b[dateKey] as unknown as string);
      return order === "newest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });
  },
};
