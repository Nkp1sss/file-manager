import path from 'path';

const up = async (pathTo) => {
  const currentPath = process.cwd();
  const parentPath = path.dirname(currentPath);
  process.chdir(parentPath);
};

export { up };
