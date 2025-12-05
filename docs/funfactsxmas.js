var funFacts = [
    "Ho ho ho! Did you know window tint can block up to 99% of harmful UV rays, keeping your sleigh safe from sun damage?",
    "Stay cool this holiday! Tinted windows can reduce interior heat by over 60%.",
    "Some states have strict tinting laws, so check before decking your car with holiday tint.",
    "Ceramic tints are magical—they won’t interfere with your GPS or radio signals while driving to grandma’s house.",
    "Tinted windows help protect your car's interior from fading, just like wrapping gifts protects them from the cold.",
    "Reduce glare from the winter sun with tint, making your drive as smooth as skating on ice.",
    "Professional installation ensures no bubbles or peeling, like a perfectly frosted Christmas cookie.",
    "Tinted windows increase privacy for passengers enjoying holiday road trips.",
    "Some tints come with lifetime warranties, a gift that keeps on giving.",
    "Window tinting can improve your car’s resale value, making it a holiday treat for your wallet.",
    "Tinted windows may reduce the risk of glass shattering, keeping your ride safe during winter travels.",
    "A properly installed tint can save energy in your home, just like cozy insulation keeps the cold out.",
    "Different films block different amounts of infrared heat, like different ornaments adding sparkle to a tree.",
    "DIY tint kits are available, but tricky—like untangling Christmas lights.",
    "Window tint comes in various shades and colors, perfect for a festive look.",
    "High-quality tint resists fading, staying bright throughout the seasons.",
    "Professional tint shops offer multiple film options, like a buffet of holiday treats.",
    "Legal tint limits vary for front, rear, and side windows, so check your local rules before decorating your ride.",
    "Tinted windows enhance the style of your vehicle, adding holiday charm.",
    "Some tints reduce the need for air conditioning, keeping your sleigh comfy on hot holiday drives.",
    "Tinting protects sensitive skin from UV, like a cozy scarf on a snowy day.",
    "Ceramic tints are pricier but deliver superior performance, like premium eggnog at Christmas.",
    "Metallic tints can interfere with cell phone signals, so be careful when sharing holiday selfies.",
    "Some films are made specifically to reduce heat, keeping your cabin as cozy as a fireplace.",
    "Tint prevents prying eyes from seeing inside your car, like a secret gift under the tree.",
    "Tinted car windows improve safety in accidents, keeping your sleigh passengers safe.",
    "Professional shops offer scratch-resistant films, ready for winter road adventures.",
    "Tint installation usually takes 1–2 hours, faster than wrapping all your holiday gifts.",
    "High-quality films resist scratches and bubbles, lasting through many festive seasons.",
    "Tinting can also be applied to building windows, keeping homes warm and energy-efficient.",
    "Window films reduce fading of furniture and carpets, like holiday decorations preserving memories.",
    "Tinting lowers interior temperatures, making summer holiday drives more pleasant.",
    "Some films block 99% of UV rays, protecting passengers like Santa protects his reindeer.",
    "Automotive tints come in dyed, metalized, and ceramic types, offering a range of options for your sleigh.",
    "Tint gives a sleek, uniform look to windows, just like perfectly wrapped gifts.",
    "High-end tints are nearly invisible while blocking UV, a stealthy holiday helper.",
    "Tinted windows reduce the risk of skin cancer, keeping everyone healthy for the holidays.",
    "Some films are scratch-resistant, lasting through years of merry travels.",
    "Professional tinting delivers a cleaner finish than DIY kits, like a beautifully decorated tree.",
    "Tint reduces glare from wet roads and reflective surfaces, making winter driving safer.",
    "Tint improves night driving comfort by cutting headlight glare, like dimming holiday lights for a cozy evening.",
    "Window films are used in commercial buildings for privacy, even during holiday office parties.",
    "Tinted glass enhances energy efficiency at home, keeping your holiday bills low.",
    "High-quality tint can last 10–15 years, a gift that keeps on giving.",
    "Tint films can sometimes be removed without damaging glass, like unwrapping a present carefully.",
    "Window tinting is popular worldwide, making cars merry and bright.",
    "Ceramic tints block more heat than traditional dyed tints, perfect for a warm cabin.",
    "Tint helps maintain interior temperatures, keeping holiday rides comfy.",
    "Some films have scratch-resistant coatings for durability, surviving snow and ice.",
    "Tinting improves passenger comfort, making holiday trips more joyful.",
    "Tint protects car interiors from fading or cracking, preserving your sleigh for seasons to come.",
    "Tint installation quality affects longevity and performance, like carefully hanging ornaments for lasting cheer."
];

var currentFact = 0;
function nextFact() {
    document.getElementById("funfact-text").innerHTML = funFacts[currentFact];
    currentFact++;
    if (currentFact >= funFacts.length) currentFact = 0;
}

nextFact();
setInterval(nextFact, 4000);
