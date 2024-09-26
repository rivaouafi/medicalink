    function downloadImage() {
                const imgSrc = document.getElementById('profile-img').src;
                const imgName = 'profile_image';
                const link = document.createElement('a');
                link.href = imgSrc;
                link.download = imgName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
        }

        document.getElementById('image-upload').addEventListener('change', function(event) {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = function() {
                        document.getElementById('profile-img').src = reader.result;
                }
                reader.readAsDataURL(file);
        });