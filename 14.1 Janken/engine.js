      let placard = JSON.parse(localStorage.getItem("placard")) || { wins: 0, ties: 0, losses: 0 };
      console.log(placard);
      let score = JSON.parse(localStorage.getItem("score")) || [];
      let calculation = localStorage.getItem("calculation") || "";

      const rock = 1;
      const paper = 2;
      const scissors = 3;

      let result = "";

      // Functions:
      function playGame(playerMove) {
        let cpuMove = Math.ceil(Math.random() * 3);
        let cpuMoveVsRock = "";

        if (playerMove === "rock") {
          if (cpuMove === 1) {
            cpuMoveVsRock = `rock`;
            result = `It's a tie. 🟡`;
            placard.ties++;
            score.push("🟡");
          } else if (cpuMove === 2) {
            cpuMoveVsRock = `paper`;
            result = "You lose. 🔴";
            placard.losses++;
            score.push("🔴");
          } else if (cpuMove === 3) {
            cpuMoveVsRock = `scissors`;
            result = "You win. 🟢";
            placard.wins++;
            score.push("🟢");
          }

          console.log(cpuMoveVsRock);
          localStorage.setItem("placard", JSON.stringify(placard));

          alert(
            `You picked ${playerMove}. CPU chose ${cpuMoveVsRock}. ${result}\nWins: ${placard.wins} Ties: ${placard.ties} Losses: ${placard.losses}`
          );
        } else if (playerMove === "paper") {
          cpuMove = Math.ceil(Math.random() * 3);
          let cpuMoveVsPaper = "";

          if (cpuMove === rock) {
            cpuMoveVsPaper = `rock`;
            result = "You win. 🟢";
            placard.wins++;
            score.push("🟢");
          } else if (cpuMove === paper) {
            cpuMoveVsPaper = `paper`;
            result = `It's a tie. 🟡`;
            placard.ties++;
            score.push("🟡");
          } else if (cpuMove === scissors) {
            cpuMoveVsPaper = `scissors`;
            result = "You lose. 🔴";
            placard.losses++;
            score.push("🔴");
          }

          console.log(cpuMoveVsPaper);
          localStorage.setItem("placard", JSON.stringify(placard));

          alert(
            `You picked paper. CPU chose ${cpuMoveVsPaper}. ${result}\nWins: ${placard.wins} Ties: ${placard.ties} Losses: ${placard.losses}`
          );
        } else if (playerMove === "scissors") {
          cpuMove = Math.ceil(Math.random() * 3);
          let cpuMoveVsScissors = "";

          if (cpuMove === rock) {
            cpuMoveVsScissors = `rock`;
            result = "You lose.🔴";
            placard.losses++;
            score.push("🔴");
          } else if (cpuMove === paper) {
            cpuMoveVsScissors = `paper`;
            result = "You win. 🟢";
            placard.wins++;
            score.push("🟢");
          } else if (cpuMove === scissors) {
            cpuMoveVsScissors = `scissors`;
            result = `It's a tie.🟡`;
            placard.ties++;
            score.push("🟡");
          }

          console.log(cpuMoveVsScissors);
          localStorage.setItem("placard", JSON.stringify(placard));

          alert(
            `You picked scissors. CPU chose ${cpuMoveVsScissors}. ${result}\nWins: ${placard.wins} Ties: ${placard.ties} Losses: ${placard.losses}`
          );
        }

        return result;
      }

      function simGame(numberOfGames) {
        for (let y = 1; y <= numberOfGames; y++) {
          let simMatch = Math.ceil(Math.random() * 3);
          if (simMatch === 1) {
            result = "You lose.";
            placard.losses++;
            score.push("🔴");
          } else if (simMatch === 2) {
            result = `It's a tie.`;
            placard.ties++;
            score.push("🟡");
          } else if (simMatch === 3) {
            result = "You win.";
            placard.wins++;
            score.push("🟢");
          }
        }

        localStorage.setItem("placard", JSON.stringify(placard));
        localStorage.setItem("score", JSON.stringify(score));

        console.log(placard);

        alert(`I know it's not pretty but I'm purposely representing the outcome with JSON stringify just for testing: ${JSON.stringify(placard)}`);
      }

      function showScore() {
        if (!Array.isArray(score) || score.length === 0) {
          alert("You need to play first…");
        } else {
          alert(score.join(" "));
        }
      }
            