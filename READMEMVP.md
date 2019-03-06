# PlayYourCodeClanCardsRight
MVP.
Create a 2 player high/low style card game,  loosely based on the TV game show from the 80's.

A game should involve the drawing of 2 sets of 5 cards,   with each set displayed horizontally.   
Set 1 will be player 1 and should be shown in the upper part of the screen.
Set 2 will be player 2 and should be shown in the lower part of the screen.

The first card for each player should be shown,   the other 4 should not but should show the back of the card.

A mechanism should be put in place to decide which player goes first,  otherwise it should default to player 1 first.

Play begins with the first player guessing if the next card in their row is higher or lower.  If they get it correct then they
get to advance to the next card and try to guess if the next card is higher or lower.  The goal of the game is to get to the end of the row with correct high/low guesses.   If the player does that they are the winner.

If a player gets a guess wrong then play switches to the other player and continues as above.

The game should be designed for 'mobile-first' and the UI design should reflect this.

Extensions
Add a new card option to allow player to change first card

Add a freeze option to freeze part way through the card row for a player,  if they are not confident of guessing high/low.  play then switches to the other player.  If the other player gets a guess wrong or freezes then play returns to the prior frozen player.   That player then has the option to change their frozen card, one time only, to hopefully a more advantageous card,  and then continue play.   Freeze is only to be allowed once per player

Add flip animation to the cards.
