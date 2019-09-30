export const upload = async (config, file) => {
    const { service } = config;

    switch (service) {
        case 'amazon-s3': {
            const { uploadUrl, downloadUrl } = config;

            return fetch(uploadUrl, {
                method: 'PUT',
                body: file
            })
            .then(() => downloadUrl)
        }
    }
}
