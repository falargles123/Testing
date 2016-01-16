   var debounce = false;
    var gameIsActive = false;
    var thug1 = 10;
    var thug2 = 20;
    var thug3 = 30;
    var thug4 = 40;
    var thug5 = 50;
    var thug6 = 60;
    var thug7 = 70;
    var thug8 = 80;
    var thug9 = 90;
    var thug1Allow = false;
    var thug2Allow = false;
    var thug3Allow = false;
    var thug4Allow = false;
    var thug5Allow = false;
    var thug6Allow = false;
    var thug7Allow = false;
    var thug8Allow = false;
    var thug9Allow = false;
    var counter = 0;
    var thug7Debouncer = false;
    var thug8Debouncer = 0;
    document.onkeydown = function testKey(k) {
      if (debounce === false && gameIsActive === true) {
        debounce = true;
      var bob = document.getElementById("bob");
      var bobTop = getComputedStyle(bob).getPropertyValue('top');
      var bobLeft = getComputedStyle(bob).getPropertyValue('left');
    if ((k.keyCode === 39 || k.keyCode === 68) && parseInt(bobLeft,10) + 10 < 300) {
      bob.style.left = (parseInt(bobLeft,10) +10) + "px";
    } else if ((k.keyCode === 40 || k.keyCode === 83) && parseInt(bobTop,10) + 10 < 300) {
      bob.style.top = (parseInt(bobTop,10) +10) + "px";
    } else if ((k.keyCode === 38 || k.keyCode === 87) && parseInt(bobTop,10) - 10 > -10) {
      bob.style.top = (parseInt(bobTop,10) -10) + "px";
    } else if ((k.keyCode === 37 || k.keyCode === 65) && parseInt(bobLeft,10) - 10 > -10) {
      bob.style.left = (parseInt(bobLeft,10) -10) + "px";
    }
    setTimeout(function debouncer() {debounce = false;},50);
    }
    }
    
    setInterval(function enemyMove() { 
      if (gameIsActive === true) {
      var enemy = document.getElementById("enemy");
      var bob = document.getElementById("bob");
      var bobTop = getComputedStyle(bob).getPropertyValue('top');
      var bobLeft = getComputedStyle(bob).getPropertyValue('left');
      var enemyLeft = (Math.floor(Math.random() * 2));
      var enemyTop = (Math.floor(Math.random() * 2));
      var isLeftOrTop = (Math.floor(Math.random() * 2));
      var enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        var enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      switch (isLeftOrTop) {
        case 0 :
          switch (enemyLeft) {
            case 0 :
              if (parseInt(enemyLeftCSS,10) + 10 < 300) {
                enemy.style.visibility = "visible";
                enemy.style.left = (parseInt(enemyLeftCSS,10) + 10) + "px";
              }
              break;
            case 1 :
              if (parseInt(enemyLeftCSS,10) - 10 > -10) {
                enemy.style.visibility = "visible";
                enemy.style.left = (parseInt(enemyLeftCSS,10) - 10) + "px";
              }
                break;
          }
          break;
        case 1 :
                    switch (enemyTop) {
            case 0 :
              if (parseInt(enemyTopCSS,10) + 10 < 300) {
                enemy.style.visibility = "visible";
                enemy.style.top = (parseInt(enemyTopCSS,10) + 10) + "px";
              }
              break;
            case 1 :
              if (parseInt(enemyTopCSS,10) - 10 > - 10) {
                enemy.style.visibility = "visible";
                enemy.style.top = (parseInt(enemyTopCSS,10) - 10) + "px";
              }
                break;
          }
          break;
          break;
      }
              enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      if (parseInt(bobTop,10) === parseInt(enemyTopCSS,10) && parseInt(bobLeft,10) === parseInt(enemyLeftCSS,10)) {
        console.log("Game over"); //game over section
        console.log(bobTop + " " + bobLeft + " " + enemyTopCSS + " " + enemyLeftCSS);
gameOver();
      //end game over section
      }
      }
                                 },75);
    function activateGame() {
      gameIsActive = true;
      var music = document.getElementById("overworld");
      var startsfx = document.getElementById("coin");
      var text = document.getElementById("starttxt");
      var btn = document.getElementById("startbtn");
      var back = document.getElementById("start");
      var pause = document.getElementById("pause");
      pause.style.visibility = "visible";
      text.style.visibility = "hidden";
      btn.style.visibility = "hidden";
      back.style.visibility = "hidden";
      music.play();
      startsfx.play();
    }
    
    function addThugs() {
      if (gameIsActive === true) {
      counter++
      var thugElement1 = document.getElementById("thug");
      var thugElement2 = document.getElementById("thug2");
      var thugElement3 = document.getElementById("thug3");
      var thugElement4 = document.getElementById("thug4");
      var thugElement5 = document.getElementById("thug5");
      var thugElement6 = document.getElementById("thug6");
      var thugElement7 = document.getElementById("thug7");
      var thugElement8 = document.getElementById("thug8");
      var thugElement9 = document.getElementById("thug9");
      var thugElement10 = document.getElementById("thug10");
      var thugElement11 = document.getElementById("thug11");
      var thugElement12 = document.getElementById("thug12");
      if (counter === thug1) {
        thugElement1.style.visibility = "visible";
        thug1Allow = true;
      } else if (counter === thug2) {
        thugElement2.style.visibility = "visible";
        thug2Allow = true;
      } else if (counter === thug3) {
        thugElement3.style.visibility = "visible";
        thug3Allow = true;
      } else if (counter === thug4) {
        thugElement4.style.visibility = "visible";
        thug4Allow = true;
      } else if (counter === thug5) {
        thugElement5.style.visibility = "visible";
        thug5Allow = true;
      } else if (counter === thug6) {
        thugElement6.style.visibility = "visible";
        thug6Allow = true;
      } else if (counter === thug7) {
        thugElement7.style.visibility = "visible";
        thug7Allow = true;
      } else if (counter === thug8) {
        thugElement8.style.visibility = "visible";
        thug8Allow = true;
      } else if (counter === thug9) {
        thug9Allow = true;
      }
    }
    }
    setInterval(addThugs,1000);
        
    
    setInterval(function thug1Move() { 
      if (gameIsActive === true && thug1Allow === true) {
      var enemy = document.getElementById("thug");
      var bob = document.getElementById("bob");
      var bobTop = getComputedStyle(bob).getPropertyValue('top');
      var bobLeft = getComputedStyle(bob).getPropertyValue('left');
      var enemyLeft = (Math.floor(Math.random() * 2));
      var enemyTop = (Math.floor(Math.random() * 2));
      var isLeftOrTop = (Math.floor(Math.random() * 2));
      var enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        var enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      switch (isLeftOrTop) {
        case 0 :
          switch (enemyLeft) {
            case 0 :
              if (parseInt(enemyLeftCSS,10) + 10 < 300) {
                enemy.style.visibility = "visible";
                enemy.style.left = (parseInt(enemyLeftCSS,10) + 10) + "px";
              }
              break;
            case 1 :
              if (parseInt(enemyLeftCSS,10) - 10 > -10) {
                enemy.style.visibility = "visible";
                enemy.style.left = (parseInt(enemyLeftCSS,10) - 10) + "px";
              }
                break;
          }
          break;
        case 1 :
                    switch (enemyTop) {
            case 0 :
              if (parseInt(enemyTopCSS,10) + 10 < 300) {
                enemy.style.visibility = "visible";
                enemy.style.top = (parseInt(enemyTopCSS,10) + 10) + "px";
              }
              break;
            case 1 :
              if (parseInt(enemyTopCSS,10) - 10 > - 10) {
                enemy.style.visibility = "visible";
                enemy.style.top = (parseInt(enemyTopCSS,10) - 10) + "px";
              }
                break;
          }
          break;
          break;
      }
              enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      if (parseInt(bobTop,10) === parseInt(enemyTopCSS,10) && parseInt(bobLeft,10) === parseInt(enemyLeftCSS,10)) {
        console.log("Game over"); //game over section
        console.log(bobTop + " " + bobLeft + " " + enemyTopCSS + " " + enemyLeftCSS);
gameOver();
      //end game over section
      }
      } 
      },75);
    
        setInterval(function thug2Move() { 
      if (gameIsActive === true && thug2Allow === true) {
      var enemy = document.getElementById("thug2");
      var bob = document.getElementById("bob");
      var bobTop = getComputedStyle(bob).getPropertyValue('top');
      var bobLeft = getComputedStyle(bob).getPropertyValue('left');
      var enemyLeft = (Math.floor(Math.random() * 2));
      var enemyTop = (Math.floor(Math.random() * 2));
      var isLeftOrTop = (Math.floor(Math.random() * 2));
      var enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        var enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      switch (isLeftOrTop) {
        case 0 :
          switch (enemyLeft) {
            case 0 :
              if (parseInt(enemyLeftCSS,10) + 10 < 300) {
                enemy.style.visibility = "visible";
                enemy.style.left = (parseInt(enemyLeftCSS,10) + 10) + "px";
              }
              break;
            case 1 :
              if (parseInt(enemyLeftCSS,10) - 10 > -10) {
                enemy.style.visibility = "visible";
                enemy.style.left = (parseInt(enemyLeftCSS,10) - 10) + "px";
              }
                break;
          }
          break;
        case 1 :
                    switch (enemyTop) {
            case 0 :
              if (parseInt(enemyTopCSS,10) + 10 < 300) {
                enemy.style.visibility = "visible";
                enemy.style.top = (parseInt(enemyTopCSS,10) + 10) + "px";
              }
              break;
            case 1 :
              if (parseInt(enemyTopCSS,10) - 10 > - 10) {
                enemy.style.visibility = "visible";
                enemy.style.top = (parseInt(enemyTopCSS,10) - 10) + "px";
              }
                break;
          }
          break;
          break;
      }
              enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      if (parseInt(bobTop,10) === parseInt(enemyTopCSS,10) && parseInt(bobLeft,10) === parseInt(enemyLeftCSS,10)) {
        console.log("Game over"); //game over section
        console.log(bobTop + " " + bobLeft + " " + enemyTopCSS + " " + enemyLeftCSS);
gameOver();
      //end game over section
      }
      } 
      },75);
    
            setInterval(function thug3Move() { 
      if (gameIsActive === true && thug3Allow === true) {
      var enemy = document.getElementById("thug3");
      var bob = document.getElementById("bob");
      var bobTop = getComputedStyle(bob).getPropertyValue('top');
      var bobLeft = getComputedStyle(bob).getPropertyValue('left');
      var enemyLeft = (Math.floor(Math.random() * 2));
      var enemyTop = (Math.floor(Math.random() * 2));
      var isLeftOrTop = (Math.floor(Math.random() * 2));
      var enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        var enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      switch (isLeftOrTop) {
        case 0 :
          switch (enemyLeft) {
            case 0 :
              if (parseInt(enemyLeftCSS,10) + 10 < 300) {
                enemy.style.visibility = "visible";
                enemy.style.left = (parseInt(enemyLeftCSS,10) + 10) + "px";
              }
              break;
            case 1 :
              if (parseInt(enemyLeftCSS,10) - 10 > -10) {
                enemy.style.visibility = "visible";
                enemy.style.left = (parseInt(enemyLeftCSS,10) - 10) + "px";
              }
                break;
          }
          break;
        case 1 :
                    switch (enemyTop) {
            case 0 :
              if (parseInt(enemyTopCSS,10) + 10 < 300) {
                enemy.style.visibility = "visible";
                enemy.style.top = (parseInt(enemyTopCSS,10) + 10) + "px";
              }
              break;
            case 1 :
              if (parseInt(enemyTopCSS,10) - 10 > - 10) {
                enemy.style.visibility = "visible";
                enemy.style.top = (parseInt(enemyTopCSS,10) - 10) + "px";
              }
                break;
          }
          break;
          break;
      }
              enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      if (parseInt(bobTop,10) === parseInt(enemyTopCSS,10) && parseInt(bobLeft,10) === parseInt(enemyLeftCSS,10)) {
        console.log("Game over"); //game over section
        console.log(bobTop + " " + bobLeft + " " + enemyTopCSS + " " + enemyLeftCSS);
gameOver();
      //end game over section
      }
      } 
      },75);
    
            setInterval(function thug4Move() { 
      if (gameIsActive === true && thug4Allow === true) {
      var enemy = document.getElementById("thug4");
      var bob = document.getElementById("bob");
      var bobTop = getComputedStyle(bob).getPropertyValue('top');
      var bobLeft = getComputedStyle(bob).getPropertyValue('left');
      var enemyLeft = (Math.floor(Math.random() * 2));
      var enemyTop = (Math.floor(Math.random() * 2));
      var isLeftOrTop = (Math.floor(Math.random() * 2));
      var enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        var enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      switch (isLeftOrTop) {
        case 0 :
          switch (enemyLeft) {
            case 0 :
              if (parseInt(enemyLeftCSS,10) + 10 < 300) {
                enemy.style.visibility = "visible";
                enemy.style.left = (parseInt(enemyLeftCSS,10) + 10) + "px";
              }
              break;
            case 1 :
              if (parseInt(enemyLeftCSS,10) - 10 > -10) {
                enemy.style.visibility = "visible";
                enemy.style.left = (parseInt(enemyLeftCSS,10) - 10) + "px";
              }
                break;
          }
          break;
        case 1 :
                    switch (enemyTop) {
            case 0 :
              if (parseInt(enemyTopCSS,10) + 10 < 300) {
                enemy.style.visibility = "visible";
                enemy.style.top = (parseInt(enemyTopCSS,10) + 10) + "px";
              }
              break;
            case 1 :
              if (parseInt(enemyTopCSS,10) - 10 > - 10) {
                enemy.style.visibility = "visible";
                enemy.style.top = (parseInt(enemyTopCSS,10) - 10) + "px";
              }
                break;
          }
          break;
          break;
      }
              enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      if (parseInt(bobTop,10) === parseInt(enemyTopCSS,10) && parseInt(bobLeft,10) === parseInt(enemyLeftCSS,10)) {
        console.log("Game over"); //game over section
        console.log(bobTop + " " + bobLeft + " " + enemyTopCSS + " " + enemyLeftCSS);
      gameOver();
      //end game over section
      }
      } 
      },75);
    
            setInterval(function thug5Move() { 
      if (gameIsActive === true && thug5Allow === true) {
      var enemy = document.getElementById("thug5");
      var bob = document.getElementById("bob");
      var bobTop = getComputedStyle(bob).getPropertyValue('top');
      var bobLeft = getComputedStyle(bob).getPropertyValue('left');
      var enemyLeft = (Math.floor(Math.random() * 2));
      var enemyTop = (Math.floor(Math.random() * 2));
      var isLeftOrTop = (Math.floor(Math.random() * 2));
      var enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        var enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      switch (isLeftOrTop) {
        case 0 :
          switch (enemyLeft) {
            case 0 :
              if (parseInt(enemyLeftCSS,10) + 10 < 300) {
                enemy.style.visibility = "visible";
                enemy.style.left = (parseInt(enemyLeftCSS,10) + 10) + "px";
              }
              break;
            case 1 :
              if (parseInt(enemyLeftCSS,10) - 10 > -10) {
                enemy.style.visibility = "visible";
                enemy.style.left = (parseInt(enemyLeftCSS,10) - 10) + "px";
              }
                break;
          }
          break;
        case 1 :
                    switch (enemyTop) {
            case 0 :
              if (parseInt(enemyTopCSS,10) + 10 < 300) {
                enemy.style.visibility = "visible";
                enemy.style.top = (parseInt(enemyTopCSS,10) + 10) + "px";
              }
              break;
            case 1 :
              if (parseInt(enemyTopCSS,10) - 10 > - 10) {
                enemy.style.visibility = "visible";
                enemy.style.top = (parseInt(enemyTopCSS,10) - 10) + "px";
              }
                break;
          }
          break;
          break;
      }
              enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      if (parseInt(bobTop,10) === parseInt(enemyTopCSS,10) && parseInt(bobLeft,10) === parseInt(enemyLeftCSS,10)) {
        console.log("Game over"); //game over section
        console.log(bobTop + " " + bobLeft + " " + enemyTopCSS + " " + enemyLeftCSS);
      gameOver();
      //end game over section
      }
      } 
      },75);
    
            setInterval(function thug6Move() { 
      if (gameIsActive === true && thug6Allow === true) {
      var enemy = document.getElementById("thug6");
      var bob = document.getElementById("bob");
      var bobTop = getComputedStyle(bob).getPropertyValue('top');
      var bobLeft = getComputedStyle(bob).getPropertyValue('left');
      var enemyLeft = (Math.floor(Math.random() * 2));
      var enemyTop = (Math.floor(Math.random() * 2));
      var isLeftOrTop = (Math.floor(Math.random() * 2));
      var enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        var enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      switch (isLeftOrTop) {
        case 0 :
          switch (enemyLeft) {
            case 0 :
              if (parseInt(enemyLeftCSS,10) + 10 < 300) {
                enemy.style.visibility = "visible";
                enemy.style.left = (parseInt(enemyLeftCSS,10) + 10) + "px";
              }
              break;
            case 1 :
              if (parseInt(enemyLeftCSS,10) - 10 > -10) {
                enemy.style.visibility = "visible";
                enemy.style.left = (parseInt(enemyLeftCSS,10) - 10) + "px";
              }
                break;
          }
          break;
        case 1 :
                    switch (enemyTop) {
            case 0 :
              if (parseInt(enemyTopCSS,10) + 10 < 300) {
                enemy.style.visibility = "visible";
                enemy.style.top = (parseInt(enemyTopCSS,10) + 10) + "px";
              }
              break;
            case 1 :
              if (parseInt(enemyTopCSS,10) - 10 > - 10) {
                enemy.style.visibility = "visible";
                enemy.style.top = (parseInt(enemyTopCSS,10) - 10) + "px";
              }
                break;
          }
          break;
          break;
      }
              enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      if (parseInt(bobTop,10) === parseInt(enemyTopCSS,10) && parseInt(bobLeft,10) === parseInt(enemyLeftCSS,10)) {
        console.log("Game over"); //game over section
        console.log(bobTop + " " + bobLeft + " " + enemyTopCSS + " " + enemyLeftCSS);
      gameOver();
      //end game over section
      }
      } 
      },75);
    
                setInterval(function thug7Move() { 
      if (gameIsActive === true && thug7Allow === true) {
      var enemy = document.getElementById("thug7");
      var bob = document.getElementById("bob");
      var bobTop = getComputedStyle(bob).getPropertyValue('top');
      var bobLeft = getComputedStyle(bob).getPropertyValue('left');
      var enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        var enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      if (thug7Debouncer === false) {
        enemy.style.top = (parseInt(enemyTopCSS,10) + 10) + "px";
      } else if (thug7Debouncer === true) {
        enemy.style.top = (parseInt(enemyTopCSS,10) - 10) + "px";
      }
      if (parseInt(enemyTopCSS,10) === 280) {
        thug7Debouncer = true;
      } else if (parseInt(enemyTopCSS, 10) === 10) {
        thug7Debouncer = false;
      }
              enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      if (parseInt(bobTop,10) === parseInt(enemyTopCSS,10) && parseInt(bobLeft,10) === parseInt(enemyLeftCSS,10)) {
        console.log("Game over"); //game over section
        console.log(bobTop + " " + bobLeft + " " + enemyTopCSS + " " + enemyLeftCSS);
gameOver();
      //end game over section
      }
      } 
      }, 10);
      
    setInterval(function thug8Move() { 
      if (gameIsActive === true && thug8Allow === true) {
      var enemy = document.getElementById("thug8");
      var bob = document.getElementById("bob");
      var bobTop = getComputedStyle(bob).getPropertyValue('top');
      var bobLeft = getComputedStyle(bob).getPropertyValue('left');
      var enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        var enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      if (thug8Debouncer === 0) {
        enemy.style.top = (parseInt(enemyTopCSS,10) + 10) + "px";
      } else if (thug8Debouncer === 1) {
        enemy.style.left = (parseInt(enemyLeftCSS,10) - 10) + "px";
      } else if (thug8Debouncer === 2) {
        enemy.style.top = (parseInt(enemyTopCSS,10) - 10) + "px";
      } else if (thug8Debouncer === 3) {
        enemy.style.left = (parseInt(enemyLeftCSS,10) + 10) + "px";
      }
      if (parseInt(enemyTopCSS,10) === 280 && parseInt(enemyLeftCSS,10) === 290) {
        thug8Debouncer = 1;
      } else if (parseInt(enemyTopCSS, 10) === 290 && parseInt(enemyLeftCSS,10) === 10) {
        thug8Debouncer = 2;
      } else if (parseInt(enemyTopCSS,10) === 10 && parseInt(enemyLeftCSS,10) === 0) {
          thug8Debouncer = 3;
      } else if (parseInt(enemyTopCSS,10) === 0 && parseInt(enemyLeftCSS,10) === 280) {
          thug8Debouncer = 0;
      }
              enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      if (parseInt(bobTop,10) === parseInt(enemyTopCSS,10) && parseInt(bobLeft,10) === parseInt(enemyLeftCSS,10)) {
        console.log("Game over"); //game over section
        console.log(bobTop + " " + bobLeft + " " + enemyTopCSS + " " + enemyLeftCSS);
gameOver();
      //end game over section
      }
      } 
      }, 10);
      function gameOver() {
      gameIsActive = false;
      var text = document.getElementById("starttxt")
      var btn = document.getElementById("startbtn")
      var back = document.getElementById("start")
      var music = document.getElementById("overworld");
      var death = document.getElementById("death");
      var thugElement1 = document.getElementById("thug");
      var thugElement2 = document.getElementById("thug2");
      var thugElement3 = document.getElementById("thug3");
      var thugElement4 = document.getElementById("thug4");
      var thugElement5 = document.getElementById("thug5");
      var thugElement6 = document.getElementById("thug6");
      var thugElement7 = document.getElementById("thug7");
      var thugElement8 = document.getElementById("thug8");
      var thugElement9 = document.getElementById("thug9");
      var thugElement10 = document.getElementById("thug10");
      var thugElement11 = document.getElementById("thug11");
      var thugElement12 = document.getElementById("thug12");
      var pause = document.getElementById("pause");
      var harris = document.getElementById("enemy");
      bob.style.top = "0px";
      bob.style.left = "0px";
      text.style.visibility = "visible";
      btn.style.visibility = "visible";
      back.style.visibility = "visible";
      text.innerHTML = "You have been killed!";
      btn.innerHTML = "Revive Bob!";
      thugElement1.style.visibility = "hidden";
      thugElement1.style.left = "290px";
      thugElement1.style.top = "0px";
      thugElement2.style.visibility = "hidden";
      thugElement2.style.left = "0px";
      thugElement2.style.top = "290px";
      thugElement3.style.visibility = "hidden";
      thugElement3.style.left = "140px";
      thugElement3.style.top = "290px";
      thugElement4.style.visibility = "hidden";
      thugElement4.style.left = "140px";
      thugElement4.style.top = "0px";
      thugElement5.style.visibility = "hidden";
      thugElement5.style.left = "0px";
      thugElement5.style.top = "140px";
      thugElement6.style.visibility = "hidden";
      thugElement6.style.left = "290px";
      thugElement6.style.top = "140px";
      thugElement7.style.top = "0px";
      thugElement7.style.visibility = "hidden";
      thugElement7.style.left = "200px";
      thugElement8.style.top = "0px";
      thugElement8.style.visibility = "hidden";
      thugElement8.style.left = "290px";
      thugElement9.style.visibility = "hidden";
      thugElement9.style.top = "130px";
      thugElement9.style.left = "130px";
      thugElement10.style.visibility = "hidden";
      thugElement10.style.top = "140px";
      thugElement10.style.left = "130px";
      thugElement11.style.visibility = "hidden";
      thugElement11.style.top = "130px";
      thugElement11.style.left = "140px";
      thugElement12.style.visibility = "hidden";
      thugElement12.style.top = "140px";
      thugElement12.style.left = "140px";
      harris.style.visibility = "hidden";
      pause.style.visibility = "hidden";
      pause.innerHTML = "Pause"
      harris.style.top = "290px";
      harris.style.left = "290px";
      music.pause();
      music.currentTime = 0;
      death.play();
      counter = 0;
    thug1Allow = false;
    thug2Allow = false;
    thug3Allow = false;
    thug4Allow = false;
    thug5Allow = false;
    thug6Allow = false;
    thug7Allow = false;
    thug8Allow = false;
    thug9Allow = false;
    thug7Debouncer = false;
    thug8Debouncer = 0;
      }
    function pause() {
              var pause = document.getElementById("pause");
      if (gameIsActive === false) {
        gameIsActive = true;
        pause.innerHTML = "Pause"
        
      } else if (gameIsActive === true) {
        gameIsActive = false;
        pause.innerHTML = "Play"
      }
    }
    function upArrowMobile() {
          var bob = document.getElementById("bob");
          var bobTop = getComputedStyle(bob).getPropertyValue('top');
          var bobLeft = getComputedStyle(bob).getPropertyValue('left');
      if (gameIsActive === true && parseInt(bobTop,10) - 10 > - 10) {
        console.log("hi");
              bob.style.top = (parseInt(bobTop,10) - 10) + "px";
        
         upArrowInterval = setInterval(function move() {
                bob = document.getElementById("bob");
                bobTop = getComputedStyle(bob).getPropertyValue('top');
                bobLeft = getComputedStyle(bob).getPropertyValue('left');
       if (parseInt(bobTop,10) - 10 > - 10 && gameIsActive === true) {
      bob.style.top = (parseInt(bobTop,10) -10) + "px";
    } }, 150)
    }
    }
    
        function downArrowMobile() {
          var bob = document.getElementById("bob");
          var bobTop = getComputedStyle(bob).getPropertyValue('top');
          var bobLeft = getComputedStyle(bob).getPropertyValue('left');
      if (gameIsActive === true && parseInt(bobTop,10) + 10 < 300) {
        console.log("hi");
              bob.style.top = (parseInt(bobTop,10) + 10) + "px";
        
         downArrowInterval = setInterval(function move2() {
                bob = document.getElementById("bob");
                bobTop = getComputedStyle(bob).getPropertyValue('top');
                bobLeft = getComputedStyle(bob).getPropertyValue('left');
       if (parseInt(bobTop,10) + 10 < 300 && gameIsActive === true) {
      bob.style.top = (parseInt(bobTop,10) + 10) + "px";
    } }, 150)
    }
    }
    
        function leftArrowMobile() {
          var bob = document.getElementById("bob");
          var bobTop = getComputedStyle(bob).getPropertyValue('top');
          var bobLeft = getComputedStyle(bob).getPropertyValue('left');
      if (gameIsActive === true && parseInt(bobLeft,10) - 10 > -10) {
        console.log("hi");
      bob.style.left = (parseInt(bobLeft,10) -10) + "px";
        
         leftArrowInterval = setInterval(function move3() {
                bob = document.getElementById("bob");
                bobTop = getComputedStyle(bob).getPropertyValue('top');
                bobLeft = getComputedStyle(bob).getPropertyValue('left');
       if (parseInt(bobLeft,10) - 10 > -10 && gameIsActive === true) {
      bob.style.left = (parseInt(bobLeft,10) -10) + "px";
    } }, 150)
    }
    }
    
        function rightArrowMobile() {
          var bob = document.getElementById("bob");
          var bobTop = getComputedStyle(bob).getPropertyValue('top');
          var bobLeft = getComputedStyle(bob).getPropertyValue('left');
      if (gameIsActive === true && parseInt(bobLeft,10) + 10 < 300) {
        console.log("hi");
      bob.style.left = (parseInt(bobLeft,10) +10) + "px";
        
         rightArrowInterval = setInterval(function move4() {
                bob = document.getElementById("bob");
                bobTop = getComputedStyle(bob).getPropertyValue('top');
                bobLeft = getComputedStyle(bob).getPropertyValue('left');
       if (parseInt(bobLeft,10) + 10 < 300 && gameIsActive === true) {
      bob.style.left = (parseInt(bobLeft,10) +10) + "px";
    } }, 150)
    }
    }
    
    function upArrowMobileClear() {
      clearInterval(upArrowInterval);
    }
        function downArrowMobileClear() {
      clearInterval(downArrowInterval);
    }
            function leftArrowMobileClear() {
      clearInterval(leftArrowInterval);
    }
            function rightArrowMobileClear() {
      clearInterval(rightArrowInterval);
    }
    window.onmouseup = function d() {
      if (typeof upArrowInterval !== "undefined") {
            clearInterval(upArrowInterval);
      }
                if (typeof downArrowInterval !== "undefined") {  clearInterval(downArrowInterval);
      }
      if (typeof leftArrowInterval !== "undefined") {
            clearInterval(leftArrowInterval);
      }
            if (typeof rightArrowInterval !== "undefined") {
            clearInterval(rightArrowInterval);
            }
    }
    // The following mobile user agent test section was courtesy of a stack overflow member. I do not own this code.
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
        // the end of the copied section.
    if (isMobile.any() === null) {
      var b1 = document.getElementById("upArrow");
      var b2 = document.getElementById("downArrow");
      var b3 = document.getElementById("leftArrow");
      var b4 = document.getElementById("rightArrow");
      b1.style.visibility = "hidden";
      b2.style.visibility = "hidden";
      b3.style.visibility = "hidden";
      b4.style.visibility = "hidden";
    }
    
      setInterval(function thug9Move() { 
      if (gameIsActive === true && thug9Allow === true) {
      var enemy = document.getElementById("thug9");
      var enemy2 = document.getElementById("thug10");
      var enemy3 = document.getElementById("thug11");
      var enemy4 = document.getElementById("thug12");
      var bob = document.getElementById("bob");
      var bobTop = getComputedStyle(bob).getPropertyValue('top');
      var bobLeft = getComputedStyle(bob).getPropertyValue('left');
      var enemyLeft = (Math.floor(Math.random() * 2));
      var enemyTop = (Math.floor(Math.random() * 2));
      var isLeftOrTop = (Math.floor(Math.random() * 2));
      var enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
      var enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
      var enemyLeftCSS2 = getComputedStyle(enemy2).getPropertyValue('left');
      var enemyTopCSS2 = getComputedStyle(enemy2).getPropertyValue('top');
      var enemyLeftCSS3 = getComputedStyle(enemy3).getPropertyValue('left');
      var enemyTopCSS3 = getComputedStyle(enemy3).getPropertyValue('top');
      var enemyLeftCSS4 = getComputedStyle(enemy4).getPropertyValue('left');
      var enemyTopCSS4 = getComputedStyle(enemy4).getPropertyValue('top');
      switch (isLeftOrTop) {
        case 0 :
          switch (enemyLeft) {
            case 0 :
              if (parseInt(enemyLeftCSS,10) + 10 < 300 && parseInt(enemyLeftCSS2,10) + 10 < 300 && parseInt(enemyLeftCSS3,10) + 10 < 300 && parseInt(enemyLeftCSS4,10) + 10 < 300 ) {
                enemy.style.visibility = "visible";
                enemy.style.left = (parseInt(enemyLeftCSS,10) + 10) + "px";
                enemy2.style.visibility = "visible";
                enemy2.style.left = (parseInt(enemyLeftCSS2,10) + 10) + "px";
                enemy3.style.visibility = "visible";
                enemy3.style.left = (parseInt(enemyLeftCSS3,10) + 10) + "px";
                enemy4.style.visibility = "visible";
                enemy4.style.left = (parseInt(enemyLeftCSS4,10) + 10) + "px";
              }
              break;
            case 1 :
              if (parseInt(enemyLeftCSS,10) - 10 > -10 && parseInt(enemyLeftCSS2,10) - 10 > -10 && parseInt(enemyLeftCSS3,10) - 10 > -10 && parseInt(enemyLeftCSS4,10) - 10 > -10) {
                enemy.style.visibility = "visible";
                enemy.style.left = (parseInt(enemyLeftCSS,10) - 10) + "px";
                enemy2.style.visibility = "visible";
                enemy2.style.left = (parseInt(enemyLeftCSS2,10) - 10) + "px";
                enemy3.style.visibility = "visible";
                enemy3.style.left = (parseInt(enemyLeftCSS3,10) - 10) + "px";
                enemy4.style.visibility = "visible";
                enemy4.style.left = (parseInt(enemyLeftCSS4,10) - 10) + "px";
              }
                break;
          }
          break;
        case 1 :
                    switch (enemyTop) {
            case 0 :
              if (parseInt(enemyTopCSS,10) + 10 < 300 && parseInt(enemyTopCSS2,10) + 10 < 300 && parseInt(enemyTopCSS3,10) + 10 < 300 && parseInt(enemyTopCSS4,10) + 10 < 300) {
                enemy.style.visibility = "visible";
                enemy.style.top = (parseInt(enemyTopCSS,10) + 10) + "px";
                enemy2.style.visibility = "visible";
                enemy2.style.top = (parseInt(enemyTopCSS2,10) + 10) + "px";
                enemy3.style.visibility = "visible";
                enemy3.style.top = (parseInt(enemyTopCSS3,10) + 10) + "px";
                enemy4.style.visibility = "visible";
                enemy4.style.top = (parseInt(enemyTopCSS4,10) + 10) + "px";
              }
              break;
            case 1 :
              if (parseInt(enemyTopCSS,10) - 10 > - 10 && parseInt(enemyTopCSS2,10) - 10 > - 10 && parseInt(enemyTopCSS3,10) - 10 > - 10 && parseInt(enemyTopCSS4,10) - 10 > - 10) {
                enemy.style.visibility = "visible";
                enemy.style.top = (parseInt(enemyTopCSS,10) - 10) + "px";
                enemy2.style.visibility = "visible";
                enemy2.style.top = (parseInt(enemyTopCSS2,10) - 10) + "px";
                enemy3.style.visibility = "visible";
                enemy3.style.top = (parseInt(enemyTopCSS3,10) - 10) + "px";
                enemy4.style.visibility = "visible";
                enemy4.style.top = (parseInt(enemyTopCSS4,10) - 10) + "px";
              }
                break;
          }
          break;
          break;
      }
        enemyLeftCSS = getComputedStyle(enemy).getPropertyValue('left');
        enemyTopCSS = getComputedStyle(enemy).getPropertyValue('top');
        enemyLeftCSS2 = getComputedStyle(enemy2).getPropertyValue('left');
        enemyTopCSS2 = getComputedStyle(enemy2).getPropertyValue('top');
        enemyLeftCSS3 = getComputedStyle(enemy3).getPropertyValue('left');
        enemyTopCSS3 = getComputedStyle(enemy3).getPropertyValue('top');
        enemyLeftCSS4 = getComputedStyle(enemy4).getPropertyValue('left');
        enemyTopCSS4 = getComputedStyle(enemy4).getPropertyValue('top');
      if ((parseInt(bobTop,10) === parseInt(enemyTopCSS,10) && parseInt(bobLeft,10) === parseInt(enemyLeftCSS,10)) || (parseInt(bobTop,10) === parseInt(enemyTopCSS2,10) && parseInt(bobLeft,10) === parseInt(enemyLeftCSS2,10)) || (parseInt(bobTop,10) === parseInt(enemyTopCSS3,10) && parseInt(bobLeft,10) === parseInt(enemyLeftCSS3,10)) || (parseInt(bobTop,10) === parseInt(enemyTopCSS4,10) && parseInt(bobLeft,10) === parseInt(enemyLeftCSS4,10))) {
        console.log("Game over"); //game over section
        console.log(bobTop + " " + bobLeft + " " + enemyTopCSS + " " + enemyLeftCSS);
      gameOver();
      //end game over section
      }
      } 
      },80);
