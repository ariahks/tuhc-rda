let store = null

module.exports = {
    title: "Rex Duodecim Angelus",
    summary: "Adds Rex Duodecim Angelus after page 3763.",
    author: "Ariah",
    modVersion: 1.0,
    locked: "002000",

    description: `Adds the popular fan animation, Rex Duodecim Angelus, to the comic after page 3763.<br /><br />
    This fan animation was not in any way made by me. The animation itself contains credits for everyone who worked on it, even when viewed inside of the comic.<br /><br />
    By default, you can find a link to the original video on the flash page (I've used previously unused page 2399), however this can be disabled below.<br /><br />
    You can also find a link <a href="https://www.youtube.com/watch?v=-19Up0dLzNw">here</a>.<br /><br /><h1>Settings</h1>`,

    settings: {
        boolean: [{
            model: "link_to_video",
            label: "Link to Video",
            desc: "Show a link to the original YouTube video on the page."
        }]
    },

    routes: {
        'assets://storyfiles/hs2/02399/02399.mp4': './rda.mp4',
    },

    computed(api) {
        store = api.store

        store.set("link_to_video", store.get("link_to_video", true))
    },

    edit(archive) {
        archive.mspa.story['005663'].content = "[<span style=\"color: white\">You rang?<br /><br />That was a joke. Of course you didn't. I don't have a doorbell, remember?<br /><br />Haa haa, hee hee, hoo hoo.<br /><br />You're early, however. Just under 8 minutes, in fact.<br /><br />I knew you would be, of course. In the meantime, I have prepared something to tide you over while you wait.</span>]"
        archive.mspa.story['005663'].next = ["004299"]
        archive.music.flashes['004299'] = {
            "date": "2011-03-14T00:00:00.000Z",
            "tracks": [ "rex-duodecim-angelus", "killed-by-br8k-spider" ]
        }

        archive.mspa.story['004299'] = {
            "title": "[S] Ƀẽ paŦíent.",
            "pageId": "004299",
            "timestamp": "1402629405",
            "flag": [ 
                "F"
            ],
            "media": [
                "/storyfiles/hs2/02399/02399.mp4"
            ],
            "content": "<a href=\"https://www.youtube.com/watch?v=-19Up0dLzNw\">Original Video</a><br /><br /><br />[<span style=\"color: white\">Ah, now wasn't that thrilling?</span>]",
            "next": [
                "005664"
            ],
            "previous": "005663"
        }
        if(!store.get("link_to_video")) {
            archive.mspa.story['004299'].content = "[<span style=\"color: white\">Ah, now wasn't that thrilling?</span>]"
        }
        archive.mspa.story['005664'].previous = "004299"
    }
}