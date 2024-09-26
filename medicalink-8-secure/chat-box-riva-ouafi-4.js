    function speakText() {
                        const text = document.getElementById('user-input').value;
                        const voice = document.getElementById('voice-select').value;

                        const msg = new SpeechSynthesisUtterance(text);

                        msg.voice = voice === 'male' ? getMaleVoice() : getFemaleVoice();
                        window.speechSynthesis.speak(msg);
                }
                // Helper functions to get male and female voices
                function getMaleVoice() {
                        const voices = window.speechSynthesis.getVoices();
                        return voices.find(voice => voice.name.includes('Male'));
                }
                function getFemaleVoice() {
                        const voices = window.speechSynthesis.getVoices();
                        return voices.find(voice => voice.name.includes('Female'));
                }
                // Load voices when the page is ready
                window.addEventListener('DOMContentLoaded', () => {
                        window.speechSynthesis.onvoiceschanged = () => {
                                // Populate voice options
                                const voiceSelect = document.getElementById('voice-select');
                                const voices = window.speechSynthesis.getVoices();
                                voices.forEach(voice => {
                                        const option = document.createElement('option');
                                        option.value = voice.name;
                                        option.textContent = voice.name;
                                        voiceSelect.appendChild(option);
                                });
                        };
                });

                // Event listener for send button click
        sendButton.addEventListener('click', handleUserInput);

        // Event listener for Enter key press
        userInput.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                        handleUserInput();
                }
        });