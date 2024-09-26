 const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('speakText()');

    // Function to add message to the chat box
    function addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');

        if (sender === 'user') {
            messageDiv.innerHTML = `
                <div class="user-message">
                    <img src="you123.jpg" class="avatar" alt="User Avatar">
                    <p>${message}</p>
                </div>
            `;
        } else if (sender === 'virtual') {
            messageDiv.innerHTML = `
                <div class="virtual-message">
                    <p>${message}</p>
                    <img src="riva123.jpg" class="avatar" alt="Virtual Avatar">
                </div>
            `;
        }

        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to bottom
    }

     // Function to handle user input
    function handleUserInput() {
        const message = userInput.value.trim();


         if (message !== '') {
             addMessage(message, 'user');

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === 'hi') {
                setTimeout(() => {
                    addMessage('hi,how are you today!', 'virtual');

                }, 500);
                  } else {
            setTimeout(() => {
                addMessage('watsup!', 'virtual');
            }, 100000);
        }

            }


           if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '?????') {
                setTimeout(() => {
                    addMessage('?????', 'virtual');
                }, 500);
            }
        }

           if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '??? ?????') {
                setTimeout(() => {
                    addMessage('????', 'virtual');
                }, 500);
            }
        }

        if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '??? ???????') {
                setTimeout(() => {
                    addMessage('????', 'virtual');
                }, 500);
            }
        }

          if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '???? ?????') {
                setTimeout(() => {
                    addMessage('???? ?????', 'virtual');
                }, 500);
            }
        }

           if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '???? ?????') {
                setTimeout(() => {
                    addMessage('???? ?????', 'virtual');
                }, 500);
            }
        }

           if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '???? ????') {
                setTimeout(() => {
                    addMessage('http://Medicalink.netlify.app', 'virtual');
                }, 500);
            }
        }

            if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '?? ????') {
                setTimeout(() => {
                    addMessage('http://Medicalink.netlify.app', 'virtual');
                }, 500);
            }
        }


               if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '???? ???????? ???????') {
                setTimeout(() => {
                    addMessage('medicalink-bot will be ready soon ', 'virtual');
                }, 500);
            }
        }


           if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '???? ???????? ???????') {
                setTimeout(() => {
                    addMessage('medicalink-bot will be ready soon ', 'virtual');
                }, 500);
            }
        }


         if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '???? ????????? ???????') {
                setTimeout(() => {
                    addMessage('medicalink-bot will be ready soon ', 'virtual');
                }, 500);
            }
        }


          if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '???? ??????? ?? ???????? ???????') {
                setTimeout(() => {
                    addMessage('medicalink-bot will be ready soon ', 'virtual');
                }, 500);
            }
        }


           if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '???? ??????? ?? ????????? ???????') {
                setTimeout(() => {
                    addMessage('medicalink-bot will be ready soon ', 'virtual');
                }, 500);
            }
        }

            if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '???? ???? ?? ????????? ??????') {
                setTimeout(() => {
                    addMessage('medicalink-bot will be ready soon ', 'virtual');
                }, 500);
            }
        }


          if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '???? ????') {
                setTimeout(() => {
                    addMessage('http://Medicalink.netlify.app', 'virtual');
                }, 500);
            }
        }

           if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '?? ????') {
                setTimeout(() => {
                    addMessage('http://Medicalink.netlify.app', 'virtual');
                }, 500);
            }
        }


           if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '?? ???') {
                setTimeout(() => {
                    addMessage('http://Medicalink.netlify.app , ??? ???? ????? 0.1 ??? ????? ????????? ???????', 'virtual');
                }, 500);
            }
        }

         if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '?? ?? ???') {
                setTimeout(() => {
                    addMessage('http://englishlink.netlify.app , ??? ???? ????? 0.1 ??? ????? ????????? ???????', 'virtual');
                }, 500);
            }
        }

        if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '?? ???') {
                setTimeout(() => {
                    addMessage('http://englishlink.netlify.app , ??? ???? ????? 0.1 ??? ????? ????????? ???????', 'virtual');
                }, 500);
            }
        }


         if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '?? ?? ???') {
                setTimeout(() => {
                    addMessage('http://englishlink.netlify.app , ??? ???? ????? 0.1 ??? ????? ????????? ???????', 'virtual');
                }, 500);
            }
        }

         if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '?? ????') {
                setTimeout(() => {
                    addMessage('http://englishlink.netlify.app , ??? ???? ????? 0.1 ??? ????? ????????? ???????', 'virtual');
                }, 500);
            }
        }

        if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '???? ????') {
                setTimeout(() => {
                    addMessage('http://englishlink.netlify.app , ??? ???? ????? 0.1 ??? ????? ????????? ???????', 'virtual');
                }, 500);
            }
        }


         if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '???? ????') {
                setTimeout(() => {
                    addMessage('http://englishlink.netlify.app , ??? ???? ????? 0.1 ??? ????? ????????? ???????', 'virtual');
                }, 500);
            }
        }


            if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === 'watsup') {
                setTimeout(() => {
                    addMessage('what is your question!', 'virtual');
                }, 500);
            }
        }


         if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '?? ?????? ????') {
                setTimeout(() => {
                    addMessage('2024', 'virtual');
                }, 500);
            }
        }

          if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '?? ?????? ????') {
                setTimeout(() => {
                    addMessage('2024', 'virtual');
                }, 500);
            }
        }

         if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '???? ????? ?????? ????') {
                setTimeout(() => {
                    addMessage('?????? ????????', 'virtual');
                }, 500);
            }
        }


         if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '???? ????? ?????? ????') {
                setTimeout(() => {
                    addMessage('?????? ????????', 'virtual');
                }, 500);
            }
        }

            if (message !== '') {

            userInput.value = ''; // Clear input field
            if (message.toLowerCase() === '???? ????? ?????? ????') {
                setTimeout(() => {
                    addMessage('?????', 'virtual');
                }, 500);
            }
        }


             if (message !== '') {

                        userInput.value = ''; // Clear input field
                        if (message.toLowerCase() === 'good morning') {
                                setTimeout(() => {
                                        addMessage('good morning', 'virtual');
                                }, 500);
                        }
                }


                 if (message !== '') {

                        userInput.value = ''; // Clear input field
                        if (message.toLowerCase() === 'hello') {
                                setTimeout(() => {
                                        addMessage('hello', 'virtual');
                                }, 500);
                        }
                }



                 if (message !== '') {

                        userInput.value = ''; // Clear input field
                        if (message.toLowerCase() === 'good evening') {
                                setTimeout(() => {
                                        addMessage('good evening', 'virtual');
                                }, 500);
                        }
                }

                  if (message !== '') {

                        userInput.value = ''; // Clear input field
                        if (message.toLowerCase() === 'what') {
                                setTimeout(() => {
                                        addMessage('what', 'virtual');
                                }, 500);
                        }
                }


                  if (message !== '') {

                        userInput.value = ''; // Clear input field
                        if (message.toLowerCase() === 'what is your favor color') {
                                setTimeout(() => {
                                        addMessage('blue sky color ', 'virtual');
                                }, 500);
                        }
                }



                 if (message !== '') {

                        userInput.value = ''; // Clear input field
                        if (message.toLowerCase() === 'how are you') {
                                setTimeout(() => {
                                        addMessage('im website chat-bot 0.1 , http://englishlink.netlify.app ', 'virtual');
                                }, 500);
                        }
                }

                 if (message !== '') {

                        userInput.value = ''; // Clear input field
                        if (message.toLowerCase() === 'how is your day') {
                                setTimeout(() => {
                                        addMessage('my day it is great', 'virtual');
                                }, 500);
                        }
                }


                if (message !== '') {

                        userInput.value = ''; // Clear input field
                        if (message.toLowerCase() === 'what time is it now') {
                                setTimeout(() => {
                                        addMessage('2024', 'virtual');
                                }, 500);
                        }
                }

                   if (message !== '') {

                        userInput.value = ''; // Clear input field
                        if (message.toLowerCase() === 'what time is it') {
                                setTimeout(() => {
                                        addMessage('2024', 'virtual');
                                }, 500);
                        }
                }


                   if (message !== '') {

                        userInput.value = ''; // Clear input field
                        if (message.toLowerCase() === 'can i talk to you') {
                                setTimeout(() => {
                                        addMessage('of course ', 'virtual');
                                }, 500);
                        }
                }




    }

    // Event listener for send button click
    sendButton.addEventListener('click', handleUserInput);

    // Event listener for Enter key press
    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
