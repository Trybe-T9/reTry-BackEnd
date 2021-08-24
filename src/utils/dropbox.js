const Dropbox = require('dropbox').Dropbox;

const dbx = new Dropbox({ accessToken: process.env.DROPBOX_TOKEN });

const dbxGet = async (url) => {
  const file = await dbx.sharingGetSharedLinkFile({
    url
  });

  return file;
};

const dbxUpload = async (file) => {
    const filename = `/${Date.now()}.png`
    await dbx.filesUpload({path: filename , contents: file.buffer});
    
    const generateLink = await dbx.sharingCreateSharedLinkWithSettings({ 
      path: filename,
      settings: {
        audience: 'public',
        access: 'viewer',
        requested_visibility: 'public',
        allow_download: true
      }
    });
    return generateLink.result.url;
};

module.exports = {
  dbxUpload,
  dbxGet,
};