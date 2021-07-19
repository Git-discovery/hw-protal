/**
 * 根据文件路径，使用正则匹配文件名
 * @param filepath
 * @returns
 */
export const getFileName = (filepath: string): string => filepath.replace(/(.*\/)*([^.]+).*/ig, '$2');

export const name = 1;
