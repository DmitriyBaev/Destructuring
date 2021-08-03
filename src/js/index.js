export default function destr(obj) {
  const {
    id, name, description = 'Описание недоступно', icon,
  } = obj;
  return {
    id, name, description, icon,
  };
}
