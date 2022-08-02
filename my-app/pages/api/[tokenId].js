export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url =
        "https://raw.githubusercontent.com/Roysignaler/ITU_Tests_NFT_Collection/main/my-app/public/itudevs/";
    // The api is sending back metadata for a ITU Dev
    // To make our collection compatible with Opensea, we need to follow some Metadata standards
    // when sending back the response from the api
    // More info can be found here: https://docs.opensea.io/docs/metadata-standards
    res.status(200).json({
        name: "ITU Dev #" + tokenId,
        description: "ITU Devs is a collection of developers and other images at ITU",
        image: image_url + tokenId + ".svg",
    });
}