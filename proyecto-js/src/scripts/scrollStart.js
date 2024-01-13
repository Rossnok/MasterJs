$(document).ready(() => {
    $(".scroll_page").on("click", (e) => {
        e.preventDefault()

        $("html , body").animate({
            scrollTop: 0,

        }, 500)

        return false
    })
})