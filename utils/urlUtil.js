const urlUtil = {
    appendUrlParameter: (baseUrl, para, value) => {
        var url = new URL(baseUrl);
        url.searchParams.append(para, value);
        return url;
    },
    getUrlParameter: (urlString, para) => {
        if (urlString == null) return null;
    
        let url = new URL(urlString);
        return url.searchParams.get(para);
    }
};

module.exports = urlUtil;