document.addEventListener('DOMContentLoaded', function () {
    ClassicEditor
        .create(document.querySelector('#editor'))
        .then(editor => {
            const citationBtn = document.getElementById('citation-btn');
            citationBtn.addEventListener('click', () => {
                editor.model.change(writer => {
                    const citationHtml = '<blockquote class="custom-citation"><cite>Citação...</cite></blockquote>';
                    const viewFragment = editor.data.processor.toView(citationHtml);
                    const modelFragment = editor.data.toModel(viewFragment);
                    editor.model.insertContent(modelFragment, editor.model.document.selection);
                });
            });
        })
        .catch(error => {
            console.error('Error initializing CKEditor:', error);
        });
});