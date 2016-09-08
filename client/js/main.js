require.config({
    "baseUrl": "client/js",
    "paths": {
	"app": "../main"
    },
    "shim": {
	"jquery": ["jquery"]
    }
});

require(["app/main"]);
