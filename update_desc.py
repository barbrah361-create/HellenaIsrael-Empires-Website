import re

with open('products.js', 'r', encoding='utf-8') as f:
    content = f.read()

def get_desc(name):
    n = name.lower()
    if any(k in n for k in ['eye gel', 'eye patch', 'eye']):
        return '<p>Revitalize your under-eye area with these cooling and brightening eye patches, designed to reduce puffiness and dark circles.</p><br><p><strong>Primary Uses:</strong> Apply under the eyes to refresh, hydrate, and brighten tired-looking skin.</p>'
    elif any(k in n for k in ['serum', 'acid', 'retinol', 'niacinamide', 'hyaluronic', 'snail', 'mucin']):
        return '<p>Target fine lines, dark spots, and uneven texture with this concentrated serum, delivering powerful active ingredients deep into the skin.</p><br><p><strong>Primary Uses:</strong> Apply a few drops to cleansed skin before moisturizing to treat specific skin concerns and boost radiance.</p>'
    elif any(k in n for k in ['lotion', 'cream', 'moisturizer', 'balm', 'butter']):
        return '<p>Moisturize and soften your skin daily with this fast-absorbing, nutrient-rich formula designed for long-lasting hydration.</p><br><p><strong>Primary Uses:</strong> Apply generously to the face or body to maintain smooth, supple, and glowing skin.</p>'
    elif any(k in n for k in ['gumm', 'supplement', 'glucosamine', 'capsule', 'omega', 'tablet', 'pill', 'gummies']):
        return '<p>Boost your daily wellness with these premium supplements formulated to provide essential nutrients to your body.</p><br><p><strong>Primary Uses:</strong> Take daily as a dietary supplement to support overall health, vitality, and natural glow from within.</p>'
    elif any(k in n for k in ['deodorant', 'antiperspirant', 'roll on', 'roll-on', 'deo']):
        return '<p>Stay fresh and confident all day with this long-lasting deodorant, offering superior protection against odor and wetness.</p><br><p><strong>Primary Uses:</strong> Apply to underarms for all-day freshness and a subtle, clean scent.</p>'
    elif any(k in n for k in ['perfume', 'fragrance', 'cologne', 'scent', 'eau de', 'body spray', 'body splash', 'body mist']):
        return '<p>Experience a captivating scent that leaves a memorable, elegant impression wherever you go.</p><br><p><strong>Primary Uses:</strong> Spray onto your body or pulse points for a beautifully balanced, refreshing, all-day fragrance.</p>'
    elif any(k in n for k in ['mist', 'spray', 'spritz', 'setting']):
        return '<p>Refresh and hydrate your skin instantly with this lightweight, soothing mist.</p><br><p><strong>Primary Uses:</strong> Spritz over your face or body throughout the day for an instant boost of hydration and radiance.</p>'
    elif any(k in n for k in ['oil', 'stretch mark', 'vaseline', 'jelly', 'petroleum']):
        return '<p>Deeply hydrate and nourish your skin with this rich, luxurious formula designed to lock in moisture and improve skin elasticity.</p><br><p><strong>Primary Uses:</strong> Massage onto clean skin, focusing on dry or stretch-prone areas, to intensely moisturize and soften.</p>'
    elif any(k in n for k in ['lip', 'gloss', 'lipstick']):
        return '<p>Add a beautiful pop of color and deep hydration to your lips with this smooth, long-lasting lip product.</p><br><p><strong>Primary Uses:</strong> Glide over lips for a stunning finish and comfortable, all-day wear.</p>'

    elif any(k in n for k in ['cleanser', 'wash', 'soap', 'gel', 'foam', 'micellar']):
        return '<p>Gently remove impurities, dirt, and excess oil with this clarifying cleanser for a fresh, balanced complexion.</p><br><p><strong>Primary Uses:</strong> Use daily to wash your face or body, leaving the skin feeling clean and refreshed without stripping moisture.</p>'
    elif any(k in n for k in ['scrub', 'exfoliat', 'peel', 'toner']):
        return '<p>Exfoliate dead skin cells and reveal a smoother, brighter complexion with this gentle yet effective formula.</p><br><p><strong>Primary Uses:</strong> Apply to skin as directed to polish, renew your skin texture, and unclog pores.</p>'
    elif any(k in n for k in ['shampoo', 'conditioner', 'hair', 'leave in', 'leave-in']):
        return '<p>Nourish and strengthen your hair from root to tip with this premium hair care formula designed for healthy, luscious locks.</p><br><p><strong>Primary Uses:</strong> Apply to hair, massage thoroughly, and style or rinse as directed for soft, manageable, and vibrant hair.</p>'
    elif any(k in n for k in ['mask', 'masque']):
        return '<p>Pamper your skin with this intensive treatment mask, formulated to deeply purify, hydrate, and rejuvenate.</p><br><p><strong>Primary Uses:</strong> Apply an even layer, leave on as directed, and rinse off for a glowing, spa-like finish.</p>'
    elif any(k in n for k in ['palette', 'eyeshadow', 'powder', 'foundation', 'concealer', 'blush', 'makeup', 'primer']):
        return '<p>Enhance your natural beauty with this high-quality, blendable makeup product designed for a flawless finish.</p><br><p><strong>Primary Uses:</strong> Apply with a brush or sponge to build customized coverage and stunning, radiant looks.</p>'
    elif any(k in n for k in ['sunscreen', 'spf', 'sun']):
        return '<p>Protect your skin from harmful UVA and UVB rays with this lightweight, non-greasy sunscreen.</p><br><p><strong>Primary Uses:</strong> Apply generously 15 minutes before sun exposure to prevent sunburn and premature skin aging.</p>'
    else:
        return '<p>Enhance your beauty routine with this premium cosmetic essential, carefully selected for its high-quality ingredients and outstanding results.</p><br><p><strong>Primary Uses:</strong> Incorporate into your daily regimen for enhanced beauty, care, and personal confidence.</p>'

def replacer(match):
    full_match = match.group(0)
    name = match.group(1)
    desc = get_desc(name)
    # properly escape the description for a template literal
    desc_escaped = desc.replace("`", "\\`")
    return re.sub(r'description:\s*`.*?`', f"description: `{desc_escaped}`", full_match, flags=re.DOTALL)

# Find each product object block that has an id, name, and description.
# Since product blocks can have arbitrary fields between name and description,
# we need a carefully constructed regex.
new_content = re.sub(r'\{\s*id:\s*\d+,\s*name:\s*"(.*?)".*?description:\s*`.*?`\s*\}', replacer, content, flags=re.DOTALL)

with open('products.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Successfully updated product descriptions!")
