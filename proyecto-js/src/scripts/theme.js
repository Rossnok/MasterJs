$(document).ready(() => {
    var theme = $("#theme")

    $("#toGreen").on('click', () => {
        theme.attr("href", "../../styles/greenTheme.css")
    })
    
    $("#toBlue").on('click', () => {
        theme.attr("href", "../../styles/blueTheme.css")
    })

    $("#toRed").on('click', () => {
        theme.attr("href", "../../styles/redTheme.css")
    })

})