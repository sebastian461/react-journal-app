import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: "curso-react-sebastian",
  api_key: "132825663287878",
  api_secret: "CcyofjbhWCEyYTegzxF9KF-K6N0",
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  /* TEST 1 */
  test("Debe de subir el archivo correctamente Cloudinary", async () => {
    const imageURL =
      "https://th.bing.com/th/id/R.965a060091093a9428f3ddf9a3380dc6?rik=z1DyNJw7RppLzg&riu=http%3a%2f%2fwww.v3wall.com%2fwallpaper%2f1680_1050%2f1005%2f1680_1050_201005041215072182354.jpg&ehk=NrhX477d3t1SKFUI4PfwmIkBjtPXLjzVU8%2bo3w46BkE%3d&risl=&pid=ImgRaw&r=0";

    const resp = await fetch(imageURL);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");
    const segments = url.split("/");
    const imageID = segments[segments.length - 1].replace(".jpg", "");
    await cloudinary.api.delete_resources([`journal/${imageID}`]);
  });

  /* TEST 2 */
  test("Debe retornar null", async () => {
    const file = new File([], "foto.jpg");
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
