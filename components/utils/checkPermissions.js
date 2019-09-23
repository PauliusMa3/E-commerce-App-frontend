export default function(user, product, permissionsNeeded) {
  let matchedPermissions = user.permissions.some(permission =>
    permissionsNeeded.includes(permission)
  );
  const ownsItem = user.id === product.user.id;
  if (matchedPermissions || ownsItem) {
    return true;
  }

  return false;
}
