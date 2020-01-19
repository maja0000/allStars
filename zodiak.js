//this needs to be in a separate file
//array of objects
allStarSigns = [
  {'Aries':`Money or other resources could be made available to you today so you
   can increase your career prospects or advance in your occupation. You'll find
   this very encouraging, as you'll throw a lot of energy into this interest.
   This is the time to be ambitious. You have what it takes to push forward with
   just about anything you want to do.`},
  {'Taurus':`Doubts about a romantic or business partnership could have an
   energizing effect on you today. You're determined to resolve any problems or
   disagreements you may have with your partner. You'll probably do it, as
   success through determination and hard work is strongly indicated. You might
    also make an advantageous new friend. `},
  {'Gemini':`Uncertainty about your financial future might have you
   developing some sort of savings or investment plan to give you more
   security. You'll probably find the help you need, as today's planets show
   that you should succeed at anything you try. A slight malaise could
   cause you to turn to vitamins, herbs, yoga, or some other sort of
   healing method that can put you back on your feet.`},
  {'Cancer':`A joint endeavor with a partner could lead to imaginative
    and creative opportunities. You feel energized and ready to take on just
    about anything. Whatever you start today, especially creative projects,
    should succeed in spite of any obstacles that come up. Relations with
    partners and others should be recharged by the day's activities.`},
  {'Leo':`Today, you might have an irresistible impulse to put your home
  in order. You want to give it a thorough cleaning, do a little decorating,
  or perhaps make some minor but necessary repairs. A new object, either a
  sculpture or painting, might inspire this desire. Your place should look
  fabulous by the time you're done. Go for it!`},
  {'Virgo':`A specific task or goal could have you making a lot of
   calls, writing a lot of letters, or doing a lot of running around in
   the car. You're feeling especially determined. You'll succeed at this
   or anything else you try today. Conversations will be productive and
   could spur you on to new projects.`},
   {'Libra':`If you've been thinking about working out of your home,
     this is the time to put your plans into action. Anything regarding money
     or the home could succeed now. All signs indicate that your hard work
     and determination will bring the results you want. An older visitor might
     drop by, perhaps with advice or ideas you'll want to consider.`},
   {'Scorpio':`Although you occasionally want to spend a whole day alone,
    this isn't the time. You have a lot of specific goals in mind that you
    want to take care of today, perhaps involving writing or speaking. There
    won't be any question of putting them off. This is a great time to
    start almost any kind of project. The planets indicate success at
    whatever you try`},
   {'Sagittarius':`Unknown skills or talents that you didn't know you
     had might set you on a course that leads to increased income, if you're
     willing to put in some hard work. This will undoubtedly lead to
     heightened self-image and self-confidence, setting off a domino effect
     that makes your future brighter. Whatever comes up today, strange as it
      may seem, go with the flow!`},
   {'Capricorn':`An unwitting communication from a friend could set you
     off on a path that changes your life. This could involve business
     opportunities, or you could discover a new interest or group you'd like
     to join. Whatever it is, it may capture your attention and keep your
     energies focused for a long time. This should be a positive
     development`},
   {'Aquarius':`Whatever difficulties may have arisen over the past few
     days, you have the power to overcome them, gain new strength, and move
     on. Your physical energy is good - you won't wear out. You'll probably
     push on and take care of each chore as it comes up. If you've been
     thinking of starting a new project, this is the day to do it. Obstacles
     won't stop you.`},
   {'Pisces':`Your association with a group could enable your spiritual
     progress today. Past emotional issues could come up, but don't despair.
      Look at it as an opportunity to release old traumas that have limited
      you. Transcending limitations of any kind - emotional, spiritual, or
      physical - is an especially productive approach. You'll release a lot
      and come out of the experience with new focus`}
];

const inputButton = document.getElementById("getDailyHoroscope");
let usersInput = document.getElementById("zodiacSigns");
let daily = document.getElementById("daily");


inputButton.addEventListener("click", function(){

  for (let i = 0; i < allStarSigns.length; i++)
  if (usersInput.value == Object.keys(allStarSigns[i])){
//get input that matches and pass into div "daily"
console.log('its a match')
// daily += usersInput.value + Object.values(allStarSigns[i]);
  } else {
console.log('not a match')
 // prompt("That's not a star sign!")
  };
usersInput.value= '';
});
