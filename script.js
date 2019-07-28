let cards = [ {
    'title' : '0. The Fool',
    'description' : 'The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner\'s luck, improvisation and believing in the universe.',
    'image' : './images/thefool.jpg',
},
{
    'title' : '1. The Magician',
    'description' : 'When the Magician appears in a spread, it points to the talents, capabilities and resources at the querent\'s disposal to succeed. The message is to tap into one\'s full potential rather than holding back, especially when there is a need to transform something.',
    'image' : './images/magician.jpg',
},
{
    'title' : '2. The High Priestess',
    'description' : 'High Priestess is a card of mystery, stillness and passivity. This card suggests that it is time to retreat and reflect upon the situation and trust your inner instincts to guide you through it. Things around you are not what they appear to be right now.',
    'image' : './images/high-priestess.jpg',
},
{
    'title' : '3. The Empress',
    'description' : 'The Empress is traditionally associated with maternal influence, it is the card if you are hoping to start a family. She can represent the creation of life, romance, art, or new business.',
    'image' : './images/empress.jpg',
},
{
    'title' : '4. The Emperor',
    'description' : 'This card is suggestive of stability and security in life. You are on top of things and everything in under your control. It is your hard work, discipline and self control that have brought you this far. It means that you are in charge of your life now setting up your own rules and boundaries.',
    'image' : './images/emperor.jpg',
},
{
    'title' : '5. The Hierophant',
    'description' : 'Hierophant stands for tradition and convention. It can represent marriage in an arranged setup. It can also mean a teacher or counsellor who will help in learning /education of the querent.',
    'image' : './images/hierophant.jpg',
},
{
    'title' : '6. The Lovers',
    'description' : 'The Lovers represent relationships and choices. Its appearance in a spread indicates some decision about an existing relationship, a temptation of the heart, or a choice of potential partners. Often an aspect of the querent\'s life will have to be sacrificed; a bachelor(ette)\'s lifestyle may be sacrificed and a relationship gained (or vice versa), or one potential partner may be chosen while another is turned down. Whatever the choice, it should not be made lightly, as the ramifications will be lasting.',
    'image' : './images/lovers.jpg',
},
{
    'title' : '7. The Chariot',
    'description' : 'The Chariot is a card about overcoming conflicts and moving forward in a positive direction. One needs to keep going on and through sheer hard work and commitment he will be victorious.',
    'image' : './images/chariot.jpg',
},
{
    'title' : '8. Strength',
    'description' : 'Strength predicts the triumphant conclusion to a major life problem, situation or temptation through strength of character. It is a very happy card if you are fighting illness or recovering from injury.',
    'image' : './images/strength.jpg',
},
{
    'title' : '9. The Hermit',
    'description' : 'The Hermit suggests that you are in a phase of introspection where you are drawing your attention inwards and looking for answers within. You are in need of a period of inner reflection, away from the current demands of your position.',
    'image' : './images/hermit.jpg',
},
{
    'title' : '10. Wheel of Fortune',
    'description' : 'A common aspect to most interpretations of this card within a reading is to introduce an element of change in the querent\'s life, such change being in station, position or fortune: such as the rich becoming poor, or the poor becoming rich.',
    'image' : './images/wheel-of-fortune.jpg',
},
{
    'title' : '11. Justice',
    'description' : 'The Justice card indicates that the fairest decision will be made. Justice is the sword that cuts through a situation, and will not be swayed by outer beauty when deciding what is fair and just.',
    'image' : './images/justice.jpg',
},
{
    'title' : '12. The Hanged Man',
    'description' : 'The Hanged Man is the card of ultimate surrender, of being suspended in time and of martyrdom and sacrifice to the greater good. Letting go, Breaking old patterns, Circumspection, Suspension, Metamorphosis',
    'image' : './images/hanged-man.jpg',
},
{
    'title' : '13. Death',
    'description' : 'Unlikely that this card actually represents a physical death. Typically it implies an end, possibly of a relationship or interest, and therefore implies an increased sense of self-awareness.',
    'image' : './images/death.jpg',
},
{
    'title' : '14. Temperance',
    'description' : 'This card indicates that you should learn to bring about balance, patience and moderation in your life. You should take the middle road, avoiding extremes and maintain a sense of calm.',
    'image' : './images/temperance.jpg',
},
{
    'title' : '15. The Devil',
    'description' : 'It represents being seduced by the material world and physical pleasures. Also living in fear, domination and bondage, being caged by an overabundance of luxury, discretion should be used in personal and business matters.',
    'image' : './images/devil.jpg',
},
{
    'title' : '16. The Tower',
    'description' : 'The Tower is commonly interpreted as meaning danger, crisis, destruction, and liberation. It is associated with sudden unforseen change.',
    'image' : './images/tower.jpg',
},
{
    'title' : '17. The Star',
    'description' : 'When the Star card appears, you are likely to find yourself feeling inspired. It brings renewed hope and faith and a sense that you are truly blessed by the universe at this time.',
    'image' : './images/star.jpg',
},
{
    'title' : '18. The Moon',
    'description' : 'The Moon is a card of illusion and deception, and therefore often suggests a time when something is not as it appears to be. Perhaps a misunderstanding on your part, or a truth you cannot admit to yourself.',
    'image' : './images/moon.jpg',
},
{
    'title' : '19. The Sun',
    'description' : 'The card portends good fortune, happiness, joy and harmony. It represents the universe coming together and agreeing with your path and aiding forward movement into something greater.',
    'image' : './images/sun.jpg',
},
{
    'title' : '20. Judgement',
    'description' : 'This card is referred to as a time of resurrection and awakening, a time when a period of our life comes to an absolute end making way for dynamic new beginnings.',
    'image' : './images/judgement.jpg',
},
{
    'title' : '21. The World',
    'description' : 'The World represents an ending to a cycle of life, a pause in life before the next big cycle beginning with the fool. It is an indicator of a major and inexorable change, of tectonic breadth.',
    'image' : './images/world.jpg',
},
];

let cardImage;
let cardTitle;
let cardDescription;  

function pickCard() {
    let i = Math.floor(Math.random()*(cards.length-1));

    cardImage = cards[i]['image'];
    cardTitle = cards[i]['title'];
    cardDescription = cards[i]['description'];;

    document.getElementById('card-img').src = cardImage; 
    document.getElementById('card-title').innerHTML = cardTitle;
    document.getElementById('card-description').innerHTML = cardDescription;
    document.getElementById('title').innerHTML = 'Today\'s card :';
    document.getElementById('welcome').innerHTML = 'Take a moment to contemplate ...';
    document.getElementById('again').style.display = 'block';
    document.getElementById('pick').style.display = 'none';
};

function tryAgain() {
    document.getElementById('card-img').src = './images/back.jpeg'; 
    document.getElementById('card-title').innerHTML = 'What is your question?';
    document.getElementById('card-description').innerHTML = 'Please take a moment to center your thoughts on the question that is important for you today...';
    document.getElementById('title').innerHTML = 'Pick a card.';
    document.getElementById('welcome').innerHTML = 'Wish to know more?';
    document.getElementById('again').style.display = 'none';
    document.getElementById('pick').style.display = 'block';
}

document.getElementById('pick').onclick = pickCard;

document.getElementById('again').onclick = tryAgain;