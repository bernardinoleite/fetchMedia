function showInput(type) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(type).style.display = 'block';

}

function download() {
    const btnDownload = document.querySelectorAll(".dwd")
    const imageFormats = [
        { mimeType: "image/jpeg", ext: ".jpeg" },
        { mimeType: "image/png", ext: ".png" },
        { mimeType: "image/gif", ext: ".gif" },
        { mimeType: "image/webp", ext: ".webp" },
        { mimeType: "image/bmp", ext: ".bmp" },
        { mimeType: "image/x-icon", ext: ".ico" },
        { mimeType: "image/vnd.microsoft.icon", ext: ".ico" },
        { mimeType: "image/tiff", ext: ".tiff" },
        { mimeType: "image/svg+xml", ext: ".svg" },
        { mimeType: "image/apng", ext: ".apng" },
        { mimeType: "image/heic", ext: ".heic" },
        { mimeType: "image/heif", ext: ".heif" },
        { mimeType: "image/x-canon-cr2", ext: ".cr2" },
        { mimeType: "image/x-nikon-nef", ext: ".nef" },
        { mimeType: "image/x-sony-arw", ext: ".arw" },
        { mimeType: "image/vnd.adobe.photoshop", ext: ".psd" }
    ];
    const videoFormats = [
        { mimeType: "video/mp4", ext: ".mp4" },
        { mimeType: "video/webm", ext: ".webm" },
        { mimeType: "video/ogg", ext: ".ogv" },
        { mimeType: "video/avi", ext: ".avi" },
        { mimeType: "video/mpeg", ext: ".mpeg" },
        { mimeType: "video/quicktime", ext: ".mov" },
        { mimeType: "video/x-msvideo", ext: ".avi" },
        { mimeType: "video/x-flv", ext: ".flv" },
        { mimeType: "video/x-matroska", ext: ".mkv" },
        { mimeType: "video/3gpp", ext: ".3gp" },
        { mimeType: "video/3gpp2", ext: ".3g2" },
        { mimeType: "video/x-ms-wmv", ext: ".wmv" },
        { mimeType: "video/x-ms-asf", ext: ".asf" },
        { mimeType: "application/vnd.rn-realmedia", ext: ".rm" },
        { mimeType: "video/h264", ext: ".h264" },
        { mimeType: "video/mp2t", ext: ".ts" }
    ];


    btnDownload.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const url = btn.parentElement.querySelector('input').value

            fetch(url)
                .then(request => request.blob())
                .then((buffer) => {

                    let typeMatch

                    const urlTemp = URL.createObjectURL(buffer)

                    const a = document.createElement('a')
                    a.href = urlTemp

                    if (btn.dataset.type === "img") {
                        typeMatch = imageFormats.find((type) => type.mimeType === buffer.type)

                        a.download = `${new Date()}.${typeMatch.ext}`
                    }

                    if (btn.dataset.type === "video") {
                        typeMatch = videoFormats.find((type) => type.mimeType === buffer.type)

                        a.download = `${new Date()}.${typeMatch.ext}`

                    }
                    document.body.appendChild(a)
                    a.click()
                    a.remove()

                })

        })
    })
}

download()

