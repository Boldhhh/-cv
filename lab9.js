document.addEventListener('DOMContentLoaded', function() {
    console.log("Танилцуулга хуудас амжилттай ачааллаа.");
    
    // Жишээ функц (Идэвхжүүлэх шаардлагатай)
    let aboutSection = document.querySelector('#about');
    aboutSection.addEventListener('click', function() {
        alert('Танилцуулгын хэсэгт тавтай морилно уу!');
    });
});
