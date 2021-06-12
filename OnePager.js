// search term validtion is handeled 
// tag validation is handeleled
const recContent = document.querySelector('.SMTitle .recContent')
const rec= document.querySelector('.rec')
const arrow = document.querySelector('.EC')
const recHeader= document.querySelector('.SMTitle .RecHeaderRight')
const VidTitleField= document.getElementById('VidTitleField')
const TagsField = document.getElementById('tags')
const errorIndication = document.querySelector('.SMTitle .errorIndication')
const TagChips= document.querySelectorAll('.tagChip')
const addTag = document.querySelector('.addTag')
const tagSuccess = document.querySelector('.tagSuccess')
const tagsRecContent = document.querySelector('.DescTags .recContent')
const tagsErrorIndication = document.querySelector('.thirderrorIndication')
console.log(tagsRecContent.innerHTML)
TagChips.forEach(function(TagChip){
    TagChip.addEventListener('click',function(event){
        TagChip.style.display='none'
        TagsField.value+=` ${TagChip.textContent} `
    })
})
TagsField.addEventListener('blur',function(event){
    console.log(TagsField.value)
    TagChips.forEach(function(TagChip){
        console.log(`this is the content of the ${TagChip.textContent}`)
        if (TagsField.value.includes(TagChip.textContent)){
            console.log('validation works')
                TagChip.style.display='none'
                tagSuccess.style.display='none'
            }
        if (TagChip.style.display==="none"){
            console.log('validation 2 works')
            tagSuccess.style.display='block'
        } if(!TagsField.value.includes(TagChip.textContent)) {
            TagChip.style.display='block'
            tagSuccess.style.display='none'
    }
    if (tagSuccess.style.display==='block'&& TagChip.style.display==="none"){
        tagsRecContent.style.display='none'
        tagSuccess.style.display='block'
        tagsErrorIndication.style.backgroundColor='green'

    }
    else { tagsRecContent.style.display='block'
        tagsErrorIndication.style.backgroundColor='rgba(255, 81, 0, 0.753)' }
    }) 
} )
let headerCollapsed = false
function HideRecContent(event){
    recContent.style.display="none"
    console.log(headerCollapsed)
    arrow.style.transform = 'rotate(180deg)'
}
function showRecContent(event){
    recContent.style.display="block"
    headerCollapsed = false;
    console.log(headerCollapsed)
    arrow.style.transform = 'rotate(180deg)'
}
recHeader.addEventListener('click', showRecContent)
arrow.addEventListener('click',HideRecContent)
VidTitleField.addEventListener('blur',function(event){
   if(VidTitleField.value =='search term set' || VidTitleField.value =='ignore this'){
        console.log('its true')
        HideRecContent()
        errorIndication.style.backgroundColor='green'
} 
else {
    showRecContent()
    errorIndication.style.backgroundColor='red'
}
})
