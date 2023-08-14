import { withInstall } from "../_utils/index.js";
import "./src/index.js";
// @ts-ignore
window.withInstall = withInstall;
console.log(withInstall);

export { withInstall };

export default withInstall;
