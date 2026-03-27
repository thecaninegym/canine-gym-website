import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { PawPrint, Clock, ArrowLeft, ArrowRight } from 'lucide-react'

type Post = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  readTime: string
  date: string
  dateIso: string
  intro: string
  content: React.ReactNode
  faq: { q: string; a: string }[]
}

const BASE = 'https://www.thecaninegym.com'

const posts: Post[] = [
  {
    slug: 'why-regular-exercise-extends-your-dogs-life',
    title: 'Why Regular Exercise Can Add Years to Your Dog\'s Life',
    metaTitle: 'Why Regular Exercise Can Add Years to Your Dog\'s Life | The Canine Gym',
    metaDescription: 'Research shows physically active dogs live 1–2 years longer than sedentary ones. Here\'s what the science says about dog exercise, lifespan, and how to take action.',
    category: 'Dog Health',
    readTime: '5 min read',
    date: 'March 2026',
    dateIso: '2026-03-01',
    intro: 'The short answer is yes - regular physical exercise is one of the most evidence-backed ways to extend your dog\'s life. Research consistently shows that active dogs live longer, get sick less often, and maintain better cognitive health as they age. If you want more years with your dog, exercise is the single most impactful change you can make.',
    faq: [
      { q: 'Does exercise really make dogs live longer?', a: 'Yes. A landmark 14-year study by Purina found that lean, active dogs lived an average of 1.8 years longer than their overweight, sedentary counterparts. The Dog Aging Project has also found that physically active dogs have significantly fewer medical diagnoses and better cognitive health as they age.' },
      { q: 'How much exercise does a dog need per day?', a: 'The American Animal Hospital Association (AAHA) recommends at least 30 minutes of aerobic exercise daily for most adult dogs. High-energy breeds may need 60–90 minutes. A brisk walk does not fully count - dogs need sustained aerobic activity that elevates the heart rate.' },
      { q: 'What counts as aerobic exercise for dogs?', a: 'Running, fetch, swimming, and structured treadmill or slatmill sessions all qualify as aerobic exercise. A casual neighborhood walk at your pace typically does not elevate your dog\'s heart rate enough to provide cardiovascular benefit.' },
      { q: 'Can older dogs still benefit from exercise?', a: 'Absolutely. Senior dogs benefit enormously from regular, low-impact exercise. It preserves muscle mass, keeps joints mobile, and supports cognitive health. The key is adjusting intensity - shorter, gentler sessions rather than eliminating exercise entirely.' },
    ],
    content: (
      <>
        <h2>What the Research Actually Shows</h2>
        <p>The evidence for exercise and canine longevity is substantial. A 14-year study published in the <em>British Journal of Nutrition</em> followed dogs from puppyhood to death and found that lean, active dogs lived an average of 1.8 years longer than overweight, sedentary dogs. That is not a small difference - it represents roughly 10–15% of a dog's entire lifespan.</p>
        <p>The Dog Aging Project, one of the largest ongoing studies of canine health, has found that physically active dogs have significantly fewer medical diagnoses across nearly every category - cardiovascular disease, orthopedic conditions, metabolic disorders, and cognitive decline. Activity level is consistently one of the strongest predictors of healthy aging in dogs.</p>
        <p>The Association for Pet Obesity Prevention (APOP) estimates that more than 56% of dogs in the US are overweight or obese. Given the direct link between obesity and shortened lifespan, regular exercise is not optional for dogs who are already carrying excess weight - it is medically necessary.</p>

        <h2>How Exercise Extends Your Dog's Life</h2>
        <p>Exercise does not just burn calories. It triggers a cascade of biological changes that directly impact how long and how well your dog lives.</p>
        <p><strong>Cardiovascular health.</strong> Regular aerobic exercise strengthens the heart muscle, improves circulation, lowers resting heart rate, and increases cardiovascular efficiency. The AAHA identifies cardiorespiratory fitness as one of the key markers of longevity in dogs.</p>
        <p><strong>Weight management.</strong> Obesity is directly linked to diabetes, orthopedic disease, heart disease, and a shorter lifespan. Exercise is the most effective long-term tool for keeping your dog at a healthy weight - and it has to be consistent to work.</p>
        <p><strong>Joint and muscle health.</strong> Consistent movement keeps joints lubricated and muscles strong, reducing the risk of arthritis and mobility issues as your dog ages. Dogs who exercise regularly throughout their lives tend to stay mobile and active far longer than sedentary dogs.</p>
        <p><strong>Mental and cognitive health.</strong> Research published in <em>Applied Animal Behaviour Science</em> has found that physical activity is directly linked to reduced anxiety, fewer destructive behaviors, and better cognitive health. An exercised dog is a calmer, happier, and mentally sharper dog.</p>
        <p><strong>Immune function.</strong> Moderate, consistent exercise reduces chronic inflammation and regulates stress hormones - both of which directly support a stronger immune response. Dogs who exercise regularly tend to get sick less frequently and recover faster.</p>

        <h2>How Much Exercise Is Enough?</h2>
        <p>The American Animal Hospital Association recommends a minimum of 30 minutes of aerobic activity daily for most adult dogs. High-energy breeds - retrievers, shepherds, huskies, working dogs - often need 60 to 90 minutes. The critical word is <em>aerobic</em>. A slow walk around the block does not elevate your dog's heart rate enough to provide meaningful cardiovascular benefit.</p>
        <p>True aerobic exercise means sustained activity that gets your dog breathing harder and their heart rate elevated - running, vigorous fetch, swimming, or structured treadmill sessions. For most pet owners, getting 30–60 minutes of real aerobic exercise into their dog's day every single day is genuinely difficult. That is exactly the problem The Canine Gym was built to solve.</p>

        <h2>The Consistency Problem - And How to Solve It</h2>
        <p>The research is clear on one thing: sporadic, intense exercise is far less effective than moderate, consistent exercise. A dog who runs hard on Saturday and sits on the couch the rest of the week is not getting the cardiovascular and longevity benefits that a dog exercising 5–6 days a week receives.</p>
        <p>That is why a structured, recurring exercise routine matters so much. Whether your dog runs with you, swims, or books sessions on a professional slatmill, the goal is the same: consistent aerobic activity, week after week, year after year.</p>
        <p>If you are in Hamilton County and looking for a reliable, structured way to keep your dog active, The Canine Gym brings a professional slatmill directly to your driveway. We serve <a href="/carmel">Carmel</a>, <a href="/fishers">Fishers</a>, <a href="/westfield">Westfield</a>, <a href="/noblesville">Noblesville</a>, <a href="/zionsville">Zionsville</a>, and <a href="/geist">Geist</a>. <a href="https://app.thecaninegym.com">Book a session</a> and give your dog the years they deserve.</p>
      </>
    ),
  },
  {
    slug: 'what-is-a-slatmill',
    title: 'What Is a Slatmill and Why Is It Better Than a Regular Treadmill?',
    metaTitle: 'What Is a Dog Slatmill? How It Works & Why Vets Love It | The Canine Gym',
    metaDescription: 'A slatmill is a non-motorized dog treadmill powered entirely by your dog. Learn how slatmills work, how they compare to motorized treadmills, and why they\'re safer and more effective.',
    category: 'Equipment',
    readTime: '4 min read',
    date: 'February 2026',
    dateIso: '2026-02-01',
    intro: 'A slatmill is a non-motorized treadmill designed specifically for dogs. Unlike electric treadmills, a slatmill\'s belt only moves when your dog walks or runs - your dog controls the speed entirely, not a motor. This makes slatmills safer, more natural, and more effective for building real canine fitness than any motorized alternative.',
    faq: [
      { q: 'What is a dog slatmill?', a: 'A slatmill is a non-motorized treadmill built specifically for dogs. The belt is made of individual slats (small boards) and only moves when the dog pushes it with their feet. There is no electric motor - the dog controls the speed completely.' },
      { q: 'Is a slatmill safe for dogs?', a: 'Yes - slatmills are widely considered the safest form of treadmill exercise for dogs. Because the belt is dog-powered, the machine stops the moment the dog stops. There is no risk of a dog being thrown off the back by a motor running at a fixed speed.' },
      { q: 'What is the difference between a slatmill and a carpet mill?', a: 'A slatmill uses individual plastic or rubber slats to form the belt, while a carpet mill uses a continuous loop of carpet. Both are non-motorized, but slatmills are generally preferred for their durability, ease of cleaning, and better traction for dogs.' },
      { q: 'What breeds benefit most from slatmill training?', a: 'All breeds benefit, but high-energy breeds especially thrive on slatmill training - retrievers, shepherds, working breeds, sporting dogs, and terriers. The slatmill gives them a structured, controlled outlet for energy that walks and fetch cannot always provide.' },
      { q: 'Can small dogs use a slatmill?', a: 'Slatmills come in different sizes. Smaller dogs can use appropriately sized slatmills, though most professional slatmills are designed for medium to large breeds. At The Canine Gym, our equipment is suited for medium to large dogs.' },
    ],
    content: (
      <>
        <h2>How a Slatmill Works</h2>
        <p>A slatmill looks like a treadmill, but there is no motor, no plug, and no control panel. The belt is built from a series of individual slats - small, flat boards - connected in a continuous loop around two rollers. When a dog steps on and starts walking, the slats rotate under their feet. The faster the dog moves, the faster the belt turns. When the dog slows down, the belt slows down. When the dog stops, the belt stops.</p>
        <p>This is fundamentally different from an electric treadmill, where a motor drives the belt at a preset speed regardless of what the dog is doing. On a slatmill, the dog is always in complete control.</p>

        <h2>Slatmill vs. Motorized Dog Treadmill: Key Differences</h2>
        <p><strong>Safety.</strong> The biggest advantage of a slatmill is safety. On a motorized treadmill, if a dog stumbles, slows down, or panics, the belt keeps moving. On a slatmill, the belt stops the instant the dog does. There is no risk of a dog being dragged or thrown off the back.</p>
        <p><strong>Natural movement.</strong> Because the dog powers the belt, their stride is completely natural. They are not chasing a machine - they are running at exactly the pace their body wants to run. This makes slatmill sessions more biomechanically sound and less likely to cause strain or injury.</p>
        <p><strong>Strength building.</strong> Driving a slatmill belt requires more muscular effort than running on a motorized treadmill at the same speed. The dog must push each slat backward, which engages the hindquarters, core, and drive muscles more actively. This makes slatmill training particularly effective for building strength and conditioning, not just cardiovascular fitness.</p>
        <p><strong>No electricity required.</strong> Slatmills are fully mechanical. They can be used anywhere - indoors, outdoors, or in a van parked in your driveway.</p>

        <h2>The Fitness Benefits of Slatmill Training</h2>
        <p>Dogs who train regularly on a slatmill develop measurably better cardiovascular fitness, stronger hindquarters and core muscles, improved endurance, and better overall body composition. Working dog trainers, competition handlers, and professional breeders have used slatmills for decades for exactly these reasons.</p>
        <p>For pet dogs, the benefits are equally significant. High-energy dogs get a genuine, structured outlet for energy. Overweight dogs burn real calories in a controlled, low-impact way. Older dogs can maintain mobility and muscle mass with sessions tailored to their pace.</p>

        <h2>Is a Slatmill Right for Your Dog?</h2>
        <p>Most medium to large dogs take to the slatmill quickly, often within the first session. Some dogs need a few minutes to understand the concept, but with a patient handler guiding them, the learning curve is short. Dogs of nearly every breed and fitness level can use a slatmill safely.</p>
        <p>At The Canine Gym, every session is run by a trained handler who introduces your dog to the slatmill at their own pace. We bring the equipment directly to your home in Hamilton County - no travel, no drop-offs, no stress. We serve <a href="/carmel">Carmel</a>, <a href="/fishers">Fishers</a>, <a href="/westfield">Westfield</a>, <a href="/noblesville">Noblesville</a>, <a href="/zionsville">Zionsville</a>, and <a href="/geist">Geist</a>. <a href="https://app.thecaninegym.com">Book your first session</a> and see what the slatmill can do for your dog.</p>
      </>
    ),
  },
  {
    slug: 'signs-your-dog-is-not-getting-enough-exercise',
    title: '7 Signs Your Dog Isn\'t Getting Enough Exercise',
    metaTitle: '7 Signs Your Dog Isn\'t Getting Enough Exercise | The Canine Gym',
    metaDescription: 'Destructive behavior, weight gain, restlessness - these are signs your dog needs more exercise. Learn to spot them early and what to do about it.',
    category: 'Dog Health',
    readTime: '4 min read',
    date: 'February 2026',
    dateIso: '2026-02-15',
    intro: 'Dogs are not subtle when they need more activity. When a dog\'s physical needs are not being met, their body and behavior send clear signals. The problem is that many owners mistake these signals for personality traits or behavior problems - when the real issue is simply a lack of exercise. Here are the seven most common signs that your dog is not getting enough physical activity.',
    faq: [
      { q: 'How do I know if my dog is getting enough exercise?', a: 'A well-exercised dog is calm at home, maintains a healthy weight, sleeps soundly, and does not exhibit destructive or anxious behaviors. If your dog is restless, destructive, overweight, or constantly seeking stimulation, they likely need more physical activity.' },
      { q: 'How much exercise does a dog need per day?', a: 'Most adult dogs need at least 30–60 minutes of aerobic exercise daily. High-energy breeds may need more. A casual walk does not fully count - dogs need sustained activity that elevates their heart rate to get the cardiovascular and behavioral benefits of real exercise.' },
      { q: 'Can lack of exercise cause aggression in dogs?', a: 'Pent-up energy can absolutely contribute to irritability, frustration, and reactive behavior in dogs. While exercise alone is not a cure for aggression, under-exercised dogs are significantly more likely to exhibit stress-related behaviors including snapping, reactivity, and excessive barking.' },
      { q: 'What is the best exercise for a high-energy dog?', a: 'High-energy dogs benefit most from sustained aerobic activities - running, fetch, swimming, or structured treadmill sessions. Activities that engage both their body and mind are even more effective. A 30-minute slatmill session can be more effective than an hour of casual walking for genuinely burning excess energy.' },
    ],
    content: (
      <>
        <h2>1. Destructive Behavior at Home</h2>
        <p>Chewing furniture, digging in the yard, destroying toys or household items - these are classic signs of a dog with too much unspent energy. Dogs are not destructive because they are bad. They are destructive because their bodies need an outlet and they have found one. When a dog cannot run, they redirect that energy into whatever is available.</p>

        <h2>2. Excessive Barking or Whining</h2>
        <p>A dog that barks at everything, whines constantly, or seems unable to settle is often a dog who has too much energy and not enough productive ways to release it. Noise and vocalization are common expressions of frustration and boredom in under-exercised dogs.</p>

        <h2>3. Weight Gain</h2>
        <p>This one is straightforward but often overlooked. If your dog is putting on weight despite no change in diet, insufficient physical activity is almost certainly the cause. More than 56% of dogs in the US are overweight, and lack of exercise is the primary driver. A dog that walks 20 minutes a day and eats a full adult portion is almost certainly in a caloric surplus.</p>

        <h2>4. Hyperactivity or Inability to Settle</h2>
        <p>Some owners describe their dogs as "hyper" or "crazy" - constantly moving, unable to relax, bouncing off the walls indoors. In most cases, this is not a personality trait. It is a physically active animal whose needs are not being met. Dogs who get adequate exercise are notably calmer and more settled at home.</p>

        <h2>5. Pulling Hard on the Leash</h2>
        <p>A dog that drags you down the street on every walk is a dog who is desperate to move. Leash pulling is partly a training issue, but it is also a fitness issue. Dogs who have already had a good run or structured workout session are generally far easier to walk calmly on a leash.</p>

        <h2>6. Restlessness or Pacing</h2>
        <p>If your dog paces around the house, cannot lie down for more than a few minutes, or keeps nudging you for attention throughout the evening, they are telling you they still have energy to burn. This is especially common in working breeds and high-drive dogs who were bred to be active for hours each day.</p>

        <h2>7. Attention-Seeking and Clingy Behavior</h2>
        <p>Dogs who constantly paw at you, follow you from room to room, drop toys in your lap every few minutes, or demand constant interaction are often under-stimulated. Physical activity helps dogs feel satisfied and settled - a well-exercised dog is generally more content to rest independently.</p>

        <h2>What to Do About It</h2>
        <p>The fix is straightforward: more structured aerobic exercise, more consistently. That means activity that genuinely elevates your dog's heart rate - not just a slow walk. If getting 30–60 minutes of real exercise into your dog's day every day is difficult with your schedule, that is exactly what The Canine Gym is designed for.</p>
        <p>We bring a professional slatmill to your driveway and run your dog for a full 30-minute session. No driving, no drop-offs, no rearranging your day. We serve <a href="/carmel">Carmel</a>, <a href="/fishers">Fishers</a>, <a href="/westfield">Westfield</a>, <a href="/noblesville">Noblesville</a>, <a href="/zionsville">Zionsville</a>, and <a href="/geist">Geist</a> in Hamilton County. <a href="https://app.thecaninegym.com">Book a session</a> and see the difference a real workout makes.</p>
      </>
    ),
  },
  {
    slug: 'dog-obesity-statistics',
    title: 'The Quiet Crisis: Over Half of US Dogs Are Overweight',
    metaTitle: 'Dog Obesity Statistics: Over Half of US Dogs Are Overweight | The Canine Gym',
    metaDescription: 'More than 56% of US dogs are overweight or obese - and most owners don\'t realize it. Here\'s what the data shows, why it matters, and what you can do today.',
    category: 'Dog Health',
    readTime: '6 min read',
    date: 'January 2026',
    dateIso: '2026-01-15',
    intro: 'More than half of all dogs in the United States are overweight or obese. According to the Association for Pet Obesity Prevention, 56% of dogs fall into this category - yet surveys consistently show that most of their owners believe their dog is a healthy weight. This gap between perception and reality has serious health consequences, and it is largely preventable.',
    faq: [
      { q: 'What percentage of dogs in the US are overweight?', a: 'According to the Association for Pet Obesity Prevention (APOP), approximately 56% of dogs in the United States are overweight or obese. This makes canine obesity the most common preventable health condition in dogs.' },
      { q: 'How can I tell if my dog is overweight?', a: 'A healthy-weight dog has ribs you can feel easily but not see, a visible waist when viewed from above, and an abdominal tuck when viewed from the side. If you cannot feel your dog\'s ribs without pressing, or if they have no visible waist, they are likely overweight. Your vet can confirm with a body condition score.' },
      { q: 'What health problems does dog obesity cause?', a: 'Canine obesity is linked to diabetes, orthopedic disease and joint pain, heart disease, respiratory problems, certain cancers, reduced immune function, and a significantly shorter lifespan. Overweight dogs live an average of 1.5–2.5 years less than dogs at a healthy weight.' },
      { q: 'How do I help my dog lose weight?', a: 'Weight loss in dogs requires a combination of reduced caloric intake and increased physical activity. Consult your vet to determine a target weight and appropriate caloric intake. For exercise, structured aerobic activity is far more effective than casual walks - 30 minutes of real aerobic exercise daily is the target for most adult dogs.' },
    ],
    content: (
      <>
        <h2>The Numbers Are Alarming</h2>
        <p>The Association for Pet Obesity Prevention has been tracking canine obesity rates in the US for over a decade. Their most recent data shows that 56% of dogs are overweight or obese. To put that in perspective: if you are at a dog park with 10 dogs, statistically more than five of them are carrying excess weight.</p>
        <p>What makes this especially concerning is that owners consistently underestimate their dog's weight. In APOP surveys, owners of overweight dogs routinely describe their pet's weight as "normal." Part of this is normalization - when most dogs around you are overweight, overweight starts to look normal. Part of it is that weight gain in dogs is gradual and easy to miss until it becomes significant.</p>

        <h2>Why Dog Obesity Is So Hard to Spot</h2>
        <p>Dogs gain weight slowly. A dog who gains a pound a month will be 12 pounds heavier in a year - a significant amount for most breeds - but the day-to-day change is imperceptible. Coat length and texture can further disguise weight gain, especially in fluffy or thick-coated breeds.</p>
        <p>The standard tool vets use is the Body Condition Score (BCS), a 1–9 scale where 4–5 is ideal. A healthy dog at BCS 5 has ribs that are easy to feel but not prominently visible, a visible waist when viewed from above, and a slight abdominal tuck viewed from the side. If you cannot feel your dog's ribs without pressing, or if there is no visible waist, your dog is likely above a healthy BCS.</p>

        <h2>The Health Consequences Are Serious</h2>
        <p>Excess weight in dogs is not a cosmetic issue. It is a medical one. Canine obesity is directly linked to a shortened lifespan - overweight dogs live 1.5 to 2.5 years less on average than dogs at a healthy weight. Beyond lifespan, the conditions associated with obesity significantly reduce quality of life:</p>
        <p><strong>Orthopedic disease.</strong> Extra weight puts direct mechanical stress on joints. Obese dogs are significantly more likely to develop osteoarthritis, hip dysplasia complications, and intervertebral disc disease. Joint pain can make exercise difficult, creating a cycle where less activity leads to more weight gain.</p>
        <p><strong>Diabetes mellitus.</strong> Obesity is one of the primary risk factors for Type 2 diabetes in dogs. Managing canine diabetes is expensive, requires daily insulin injections, and significantly impacts quality of life for both dog and owner.</p>
        <p><strong>Cardiovascular and respiratory disease.</strong> Excess fat tissue increases cardiac workload and can restrict respiratory function. Obese dogs are more prone to hypertension, heart disease, and breathing difficulties - especially in brachycephalic breeds like bulldogs and pugs.</p>
        <p><strong>Certain cancers.</strong> Research has found correlations between canine obesity and higher rates of several cancers, including bladder cancer and mammary tumors. The exact mechanisms are still being studied, but the association is consistent.</p>

        <h2>What You Can Do Today</h2>
        <p>The solution has two components: diet and exercise. On the diet side, work with your vet to determine the appropriate daily caloric intake for your dog's target weight - not their current weight. Many commercial dog foods are calorically dense and portion guidelines on the bag are often generous.</p>
        <p>On the exercise side, consistency matters more than intensity. Thirty minutes of real aerobic exercise daily - not a casual walk, but sustained activity that elevates the heart rate - is the target for most adult dogs. For dogs who are already overweight, low-impact aerobic exercise like slatmill sessions is ideal. It burns significant calories without the joint stress of running on hard surfaces.</p>
        <p>The Canine Gym brings professional slatmill sessions to your driveway across Hamilton County. We serve <a href="/carmel">Carmel</a>, <a href="/fishers">Fishers</a>, <a href="/westfield">Westfield</a>, <a href="/noblesville">Noblesville</a>, <a href="/zionsville">Zionsville</a>, and <a href="/geist">Geist</a>. Every session is logged so you can track your dog's progress over time. <a href="https://app.thecaninegym.com">Get started today.</a></p>
      </>
    ),
  },
  {
    slug: 'how-much-exercise-does-my-dog-need',
    title: 'How Much Exercise Does My Dog Actually Need?',
    metaTitle: 'How Much Exercise Does My Dog Need Per Day? | The Canine Gym',
    metaDescription: 'The answer depends on breed, age, and health - but the baseline is higher than most owners think. Here\'s a practical breakdown by dog type with daily exercise guidelines.',
    category: 'Training Tips',
    readTime: '5 min read',
    date: 'January 2026',
    dateIso: '2026-01-01',
    intro: 'The amount of exercise your dog needs depends on their breed, age, health, and individual energy level. But if there is one universal truth, it is this: most dogs need more exercise than they are currently getting. The American Animal Hospital Association recommends a minimum of 30 minutes of aerobic exercise daily for adult dogs - and many breeds need significantly more.',
    faq: [
      { q: 'How much exercise does a dog need per day?', a: 'Most adult dogs need a minimum of 30–60 minutes of aerobic exercise per day. High-energy working breeds may need 90 minutes to 2 hours. Puppies need shorter, more frequent sessions. Senior dogs should exercise daily but at lower intensity.' },
      { q: 'Is a 30-minute walk enough for a dog?', a: 'It depends on the pace. A brisk, continuous 30-minute walk can count as light aerobic exercise. A slow, stop-and-sniff walk does not. Most dogs need activity that genuinely elevates their heart rate for sustained cardiovascular benefit.' },
      { q: 'Do dogs need exercise every day?', a: 'Yes. Daily exercise is far more effective than sporadic intense sessions. Dogs who exercise consistently maintain better cardiovascular health, healthier weight, and calmer behavior than dogs who get occasional bursts of activity.' },
      { q: 'Can I over-exercise my dog?', a: 'Yes, especially in puppies whose growth plates are still developing, in brachycephalic breeds, and in dogs with existing health conditions. For healthy adult dogs, the more common problem is under-exercise rather than over-exercise. Watch for excessive panting, limping, or reluctance to continue as signs you need to slow down.' },
      { q: 'What if I don\'t have time to exercise my dog every day?', a: 'Consistency matters more than duration. Even 20–30 minutes of real aerobic activity daily is better than a 2-hour session on weekends. Professional dog fitness services like The Canine Gym are designed for exactly this situation - we come to your home so your dog gets a quality workout even on your busiest days.' },
    ],
    content: (
      <>
        <h2>The Baseline: 30 Minutes of Aerobic Exercise Daily</h2>
        <p>The American Animal Hospital Association (AAHA) sets 30 minutes of aerobic exercise as the daily minimum for most adult dogs. This means sustained activity that elevates the heart rate - not a leisurely sniff around the block. A brisk walk, a run, a game of fetch, swimming, or a structured treadmill session all count. A slow 20-minute stroll does not.</p>
        <p>The word "aerobic" is important here. Aerobic exercise is what drives the cardiovascular benefits, burns meaningful calories, and produces the mental calm that makes dogs easier to live with. If your dog finishes a walk and is still bouncing off the walls, the walk was not aerobic enough.</p>

        <h2>Exercise Needs by Dog Type</h2>
        <p><strong>High-energy working and sporting breeds (60–120 minutes/day).</strong> Border Collies, Belgian Malinois, Australian Shepherds, Siberian Huskies, Vizslas, Weimaraners, and similar breeds were bred to work all day. They need 1–2 hours of vigorous exercise daily. A 30-minute walk will not come close to meeting their needs. Without adequate exercise, these breeds are prone to anxiety, destructiveness, and behavioral issues.</p>
        <p><strong>Active and sporting breeds (45–90 minutes/day).</strong> Labrador Retrievers, Golden Retrievers, German Shepherds, Boxers, Dalmatians, and most terriers thrive with 45–90 minutes of vigorous daily activity. They are adaptable and can do well in most households - but only if their exercise needs are consistently met.</p>
        <p><strong>Moderate-energy breeds (30–60 minutes/day).</strong> Most mixed breeds, Bulldogs (non-brachycephalic), Poodles, Cocker Spaniels, and similar dogs do well with 30–60 minutes of aerobic exercise per day. These dogs are often described as "easy" - because their exercise needs are achievable for most owners who make it a daily priority.</p>
        <p><strong>Lower-energy breeds (20–30 minutes/day).</strong> Basset Hounds, Shih Tzus, Cavalier King Charles Spaniels, and similar breeds need less intense exercise - but they still need daily activity. Weight gain and joint problems are common in low-energy breeds that are not exercised regularly.</p>
        <p><strong>Brachycephalic breeds (short, careful sessions).</strong> Bulldogs, Pugs, French Bulldogs, and Boston Terriers need exercise but require extra caution. Their compromised airways make overheating a risk. Short, calm sessions in cool weather are the safest approach. Avoid exercise in heat and watch carefully for respiratory distress.</p>

        <h2>Puppies and Senior Dogs</h2>
        <p><strong>Puppies.</strong> A common guideline is 5 minutes of exercise per month of age, twice a day. So a 4-month-old puppy needs about 20 minutes of exercise twice daily. Puppies should not do high-impact running on hard surfaces until their growth plates close - typically around 12–18 months for large breeds.</p>
        <p><strong>Senior dogs.</strong> Exercise is just as important for older dogs as it is for young ones, but intensity should be reduced. Shorter, more frequent sessions are better than long, intense ones. Swimming and slatmill training are excellent low-impact options for seniors because they build cardiovascular fitness and maintain muscle mass without the joint stress of running on pavement.</p>

        <h2>The Consistency Rule</h2>
        <p>Whatever your dog's exercise requirement, the most important variable is consistency. Daily moderate exercise is significantly more effective than sporadic intense exercise. A dog who runs 30 minutes every day is in better cardiovascular shape than a dog who runs 2 hours on Saturday and sits for the rest of the week.</p>
        <p>If daily aerobic exercise is difficult to fit into your schedule, The Canine Gym was built for exactly that situation. We come to your home with a professional slatmill and run your dog for a full 30-minute session - no driving, no planning, no rearranging your day. We serve <a href="/carmel">Carmel</a>, <a href="/fishers">Fishers</a>, <a href="/westfield">Westfield</a>, <a href="/noblesville">Noblesville</a>, <a href="/zionsville">Zionsville</a>, and <a href="/geist">Geist</a>. <a href="https://app.thecaninegym.com">Book a session</a> and let us handle the workout.</p>
      </>
    ),
  },
  {
    slug: 'benefits-of-consistent-dog-exercise-routine',
    title: 'Why Consistency Matters More Than Intensity for Dog Fitness',
    metaTitle: 'Why Consistency Matters More Than Intensity for Dog Fitness | The Canine Gym',
    metaDescription: '"Weekend warrior" dogs who get intense but irregular exercise are at higher risk of injury. Here\'s why consistent daily exercise is the most important fitness principle for dogs.',
    category: 'Training Tips',
    readTime: '4 min read',
    date: 'December 2025',
    dateIso: '2025-12-01',
    intro: 'When it comes to dog fitness, how often matters more than how hard. A dog who exercises moderately every day will be healthier, fitter, and safer than a dog who has occasional intense sessions with long stretches of inactivity in between. Consistency is the single most important variable in a dog\'s long-term fitness - and it is also the one most pet owners struggle with.',
    faq: [
      { q: 'Is it better to exercise my dog every day or a few times a week?', a: 'Every day, without question. Daily moderate exercise produces far better cardiovascular fitness, weight management, and behavioral outcomes than exercising a few times per week at higher intensity. Consistency is the most important variable in canine fitness.' },
      { q: 'What is "weekend warrior syndrome" in dogs?', a: 'Weekend warrior syndrome refers to dogs who are mostly sedentary during the week and then engage in intense physical activity on weekends. These dogs are at significantly higher risk of muscle strains, ligament injuries, and exhaustion because their bodies are not conditioned for sustained effort.' },
      { q: 'How do I build a consistent exercise routine for my dog?', a: 'Attach exercise to an existing daily habit - morning routine, after work, before dinner. Start with achievable sessions (even 20–30 minutes) and build from there. Services like The Canine Gym remove the effort from the equation entirely by bringing the workout to your door on a scheduled basis.' },
      { q: 'What are the benefits of a consistent exercise routine for dogs?', a: 'Consistently exercised dogs maintain healthier weight, have stronger cardiovascular systems, are calmer at home, sleep better, have fewer behavioral issues, and live longer than dogs whose exercise is sporadic.' },
    ],
    content: (
      <>
        <h2>The Weekend Warrior Problem</h2>
        <p>Many well-meaning dog owners follow a pattern that veterinarians call "weekend warrior" exercise. The dog sits relatively still Monday through Friday, then gets a big run or long hike on Saturday and Sunday. The owner feels good about the weekend activity, and the dog seems to enjoy it. But this pattern is actually counterproductive - and potentially harmful.</p>
        <p>A dog whose body is not conditioned to sustained effort will experience muscle fatigue, micro-tears, and joint stress when subjected to sudden intense activity. Veterinary sports medicine specialists see a predictable spike in soft tissue injuries - strains, sprains, and cruciate ligament tears - in dogs who are relatively sedentary during the week and then pushed hard on weekends.</p>
        <p>Beyond injury risk, the fitness benefits of exercise are cumulative and time-dependent. Cardiovascular adaptations - improved heart efficiency, better oxygen utilization, lower resting heart rate - only develop in response to regular, repeated aerobic stimulus. An intense weekend run does not create these adaptations the way daily moderate exercise does.</p>

        <h2>What Consistent Exercise Actually Does</h2>
        <p><strong>Cardiovascular conditioning.</strong> The heart and cardiovascular system adapt progressively to regular aerobic exercise. A dog who runs 30 minutes every day develops a measurably more efficient cardiovascular system than one who runs 2 hours on Saturdays. The daily stimulus is what drives the adaptation.</p>
        <p><strong>Weight management.</strong> Caloric expenditure needs to be consistent to be effective. Exercise burns calories in the session and elevates metabolism for hours afterward. Daily exercise maintains an elevated metabolic baseline. Sporadic exercise does not.</p>
        <p><strong>Behavioral stability.</strong> Dogs who exercise every day are calmer and more settled at home than dogs whose exercise is irregular. The calming effect of exercise on the nervous system - reduced cortisol, increased serotonin - requires regular reinforcement to be sustained. A dog who ran hard on Saturday is not behaviorally benefiting from that run by Wednesday.</p>
        <p><strong>Musculoskeletal health.</strong> Regular movement keeps joints lubricated, muscles conditioned, and connective tissues flexible. Dogs who move consistently are far less prone to the stiffness, weakness, and injury risk that comes with long periods of inactivity punctuated by sudden exertion.</p>

        <h2>How to Build a Routine That Actually Sticks</h2>
        <p>The research on habit formation is clear: routines that attach to existing daily behaviors are far more likely to stick than stand-alone commitments. The most sustainable dog exercise routines are ones that happen at the same time every day, attached to something the owner already does - morning coffee, getting home from work, before dinner.</p>
        <p>The other key variable is removing friction. The harder it is to get your dog exercised, the less likely it is to happen consistently. If exercise requires driving somewhere, loading the car, and planning ahead, it will not happen every day for most people.</p>

        <h2>The Canine Gym Approach</h2>
        <p>The Canine Gym was built around this insight. We come to you, on a scheduled basis, so your dog gets a real 30-minute aerobic workout without any logistical effort on your part. You book recurring sessions, we show up, your dog runs, and you see the results - tracked in the app after every session.</p>
        <p>For dog owners in Hamilton County who want their dog to get the consistent exercise they deserve without rearranging their day, this is exactly the solution. We serve <a href="/carmel">Carmel</a>, <a href="/fishers">Fishers</a>, <a href="/westfield">Westfield</a>, <a href="/noblesville">Noblesville</a>, <a href="/zionsville">Zionsville</a>, and <a href="/geist">Geist</a>. <a href="https://app.thecaninegym.com">Book your first session</a> and build the routine your dog needs.</p>
      </>
    ),
  },
  {
    slug: 'best-dog-breeds-for-slatmill-training',
    title: 'Best Dog Breeds for Slatmill Training (And How Any Dog Can Benefit)',
    metaTitle: 'Best Dog Breeds for Slatmill Training | The Canine Gym',
    metaDescription: 'Some breeds are natural slatmill athletes. Others need more encouragement. Here is a breed-by-breed guide to slatmill training and why almost every dog can benefit.',
    category: 'Dog Health',
    readTime: '5 min read',
    date: 'March 2026',
    dateIso: '2026-03-15',
    intro: 'While every dog can benefit from structured slatmill exercise, some breeds take to it immediately and thrive in ways that go beyond casual walks or backyard play. Understanding your dog\'s breed tendencies helps you set realistic expectations, train more effectively, and get better results. Here is a practical guide to which breeds excel on the slatmill, and why any dog, with the right introduction, can become a slatmill runner.',
    faq: [
      { q: 'What breeds are best suited for slatmill training?', a: 'High-drive working breeds and sporting dogs tend to take to slatmill training most naturally, retrievers, shepherds, Belgian Malinois, huskies, and terriers. These breeds have the instinct and energy to power the belt without much hesitation. That said, most medium to large dogs can learn to use a slatmill with patient, positive introduction.' },
      { q: 'Can small dogs use a slatmill?', a: 'Many small dogs can use appropriately sized slatmills. However, most professional slatmills are designed for medium to large breeds. At The Canine Gym, our equipment is best suited for medium to large dogs.' },
      { q: 'Can brachycephalic dogs like Bulldogs and Pugs use a slatmill?', a: 'Flat-faced breeds can use a slatmill but require extra caution. Their restricted airways make intense aerobic exercise risky, especially in warm conditions. Slatmill sessions for these breeds should be shorter, lower intensity, and carefully monitored. Always consult your vet before starting any exercise program for a brachycephalic dog.' },
      { q: 'How long does it take to train a dog to use a slatmill?', a: 'Most dogs understand the slatmill within their first session, especially with a patient, experienced handler guiding them. Some dogs take two or three sessions to move confidently on their own. High-drive breeds often figure it out within minutes.' },
      { q: 'Is slatmill training safe for senior dogs?', a: 'Yes, with appropriate intensity adjustments. Senior dogs benefit greatly from low-impact, consistent movement, it preserves muscle mass, keeps joints mobile, and supports cognitive health. Sessions for older dogs should be shorter and at a comfortable, self-selected pace.' },
    ],
    content: (
      <>
        <h2>Why Breed Matters for Slatmill Training</h2>
        <p>Dogs were selectively bred for thousands of years for specific physical and behavioral traits. A Border Collie was bred to run all day. A Basset Hound was bred to move slowly and deliberately, nose to the ground. These differences in drive, structure, and temperament are real, and they affect how a dog responds to structured exercise like slatmill training.</p>
        <p>Understanding your dog's breed tendencies does not determine whether they can use a slatmill. It helps you understand what to expect, how to introduce it, and what a healthy, sustainable workout looks like for your specific dog.</p>

        <h2>Breeds That Excel on the Slatmill</h2>
        <p><strong>Retrievers (Labrador, Golden, Chesapeake Bay).</strong> Retrievers are among the most naturally suited breeds for slatmill work. They have the drive, the athleticism, and the eagerness to please that makes training easy. Labs in particular tend to step onto a slatmill and start moving with minimal hesitation. Their tendency toward weight gain also makes consistent aerobic exercise especially important for their long-term health.</p>
        <p><strong>German Shepherds and Belgian Malinois.</strong> Working line shepherds and Malinois are built for sustained effort. They have exceptional cardiovascular capacity, powerful rear drives, and high motivation. These breeds often become genuinely enthusiastic about slatmill sessions quickly, they recognize it as the structured work their genetics were built for.</p>
        <p><strong>Siberian Huskies and Alaskan Malamutes.</strong> Bred to run long distances in extreme conditions, sled breeds are natural endurance athletes. They have the cardiovascular capacity for longer sessions and tend to find a rhythmic pace on the slatmill that they can maintain for extended periods. Their thick coats require attention to ambient temperature during sessions.</p>
        <p><strong>Sporting Dogs (Vizsla, Weimaraner, Pointer, Setter).</strong> Sporting breeds were developed to work all day in the field. They have exceptional stamina, natural athleticism, and high exercise needs. These breeds often underexercised in pet environments, a slatmill gives them the sustained aerobic outlet their breeding demands.</p>
        <p><strong>Terriers.</strong> Do not underestimate terriers. Jack Russells, Airedales, and Bull Terriers have a tenacity and drive that translates well to slatmill work. They are quick, powerful, and highly motivated. Terriers often surprise owners with how readily they take to structured exercise.</p>
        <p><strong>Pit Bull Terriers and American Bulldogs.</strong> These athletic, muscular breeds thrive on slatmill training. They are powerful, high-drive, and respond well to structured exercise. Regular slatmill sessions help manage their energy levels and build the lean muscle mass these breeds are naturally inclined toward.</p>

        <h2>Breeds That Benefit But Need More Patience</h2>
        <p><strong>Hounds (Beagle, Bloodhound, Coonhound).</strong> Scent hounds are nose-first dogs, they are easily distracted and less naturally inclined toward sustained forward movement without a scent trail to follow. With patient, positive introduction and an experienced handler, most hounds learn the slatmill. Their exercise needs are real, even if their motivation looks different from a retriever's.</p>
        <p><strong>Herding breeds (Border Collie, Australian Shepherd, Heeler).</strong> These breeds have exceptional intelligence and high drive but can be sensitive to new environments and equipment. A nervous Border Collie may hesitate initially, not from lack of ability, but from caution. Once they understand the slatmill, they often become enthusiastic athletes.</p>
        <p><strong>Giant breeds (Great Dane, Saint Bernard, Newfoundland).</strong> Giant breeds benefit from regular, low-impact exercise, but their sessions need to be managed carefully. Their joint health is a priority, shorter sessions at moderate intensity, with careful attention to surface and recovery. The slatmill's self-paced nature is actually ideal for giant breeds who should not be pushed beyond their natural speed.</p>

        <h2>Breeds That Require Extra Caution</h2>
        <p><strong>Brachycephalic breeds (Bulldog, Pug, French Bulldog, Boston Terrier).</strong> Flat-faced breeds have anatomically restricted airways that limit their ability to breathe efficiently during aerobic exercise. This does not mean they should not exercise, it means sessions must be shorter, at lower intensity, in cooler conditions, with constant monitoring for signs of respiratory distress. Always get veterinary clearance before starting slatmill training with a brachycephalic dog.</p>
        <p><strong>Dogs with known orthopedic conditions.</strong> Dogs with hip dysplasia, elbow dysplasia, or a history of ligament injuries can often still benefit from controlled slatmill exercise, but only with veterinary guidance on appropriate intensity and duration. In many cases, controlled, low-impact movement is actually therapeutic rather than harmful.</p>

        <h2>The Bottom Line: Any Dog Can Benefit</h2>
        <p>Breed tendencies are a starting point, not a ceiling. The single most important factor in successful slatmill training is not breed, it is the handler. A patient, experienced handler who introduces the equipment positively, reads the dog's signals accurately, and adjusts intensity appropriately can get almost any healthy adult dog moving confidently on a slatmill.</p>
        <p>At The Canine Gym, we work with dogs of all breeds, ages, and fitness levels across Hamilton County. We know how to introduce the slatmill in a way that builds confidence, not anxiety. Whether you have a Lab who will be running in thirty seconds or a nervous rescue who needs a more gradual approach, we meet your dog where they are.</p>
        <p>We serve <a href="/carmel">Carmel</a>, <a href="/fishers">Fishers</a>, <a href="/westfield">Westfield</a>, <a href="/noblesville">Noblesville</a>, <a href="/zionsville">Zionsville</a>, and <a href="/geist">Geist</a>. <a href="https://app.thecaninegym.com">Book a session</a> and find out what your dog is capable of.</p>
      </>
    ),
  },
  {
    slug: 'mobile-dog-fitness-vs-dog-daycare',
    title: 'Mobile Dog Fitness vs. Dog Daycare: Which Is Actually Better for Your Dog?',
    metaTitle: 'Mobile Dog Fitness vs. Dog Daycare: Which Is Better? | The Canine Gym',
    metaDescription: 'Dog daycare and mobile fitness both promise to tire your dog out. But they work very differently. Here is an honest comparison of what each actually delivers for your dog\'s health.',
    category: 'Dog Health',
    readTime: '5 min read',
    date: 'March 2026',
    dateIso: '2026-03-20',
    intro: 'Dog daycare and mobile dog fitness are both marketed as solutions to the same problem: a high-energy dog who needs more stimulation than a busy owner can consistently provide. But they are fundamentally different in how they work, what they deliver, and what they cost, financially and in terms of your dog\'s actual health. Here is an honest, side-by-side comparison so you can make an informed decision for your dog.',
    faq: [
      { q: 'Is dog daycare actually good exercise for dogs?', a: 'It depends heavily on the specific facility and your dog. Some dogs run and play actively at daycare. Many spend significant portions of the day resting, anxious, or overstimulated rather than physically exercising. Daycare provides social interaction and stimulation, but it rarely delivers consistent, measurable aerobic exercise.' },
      { q: 'Is mobile dog fitness better than daycare?', a: 'For physical fitness specifically, yes, structured slatmill sessions deliver consistent, measurable aerobic exercise that daycare rarely matches. For dogs who need socialization or cannot be left alone, daycare serves a different purpose. The two are not always direct competitors.' },
      { q: 'How much does dog daycare cost compared to mobile fitness?', a: 'Dog daycare in Hamilton County typically runs $30–$45 per day. At 5 days per week, that is $600–$900 per month. The Canine Gym\'s Standard Membership (4 sessions per month) starts at $180/month, and a La Carte sessions are $55 each. For dogs who attend daycare primarily for exercise, mobile fitness is significantly more cost-effective per unit of actual exercise delivered.' },
      { q: 'Can my dog get sick at daycare?', a: 'Yes. Group dog environments carry real disease transmission risk, kennel cough, canine influenza, giardia, and parasites are all documented risks in daycare settings. This does not mean daycare is unsafe, but it is a real consideration, especially for immunocompromised dogs, puppies, or senior dogs.' },
      { q: 'What if my dog does not do well at daycare?', a: 'Many dogs do not thrive in daycare environments. Dogs who are anxious, reactive, selective about other dogs, or who find large group settings overwhelming often do worse after a daycare day, not better. Mobile fitness sessions involve just your dog and a handler, no group dynamics, no stress triggers.' },
    ],
    content: (
      <>
        <h2>What Dog Daycare Actually Is</h2>
        <p>Dog daycare is a supervised group environment where dogs spend the day together while their owners are at work or away. At its best, a well-run daycare facility provides socialization, mental stimulation, and some amount of physical activity in a safe, supervised setting. At its worst, it is a high-stress, high-noise environment where your dog spends the day anxious, overstimulated, or simply lying down in a corner waiting to go home.</p>
        <p>The reality of what happens at most daycares falls somewhere in between, and it varies enormously by facility, by the specific group of dogs present on any given day, and by your individual dog's temperament and preferences.</p>

        <h2>What Mobile Dog Fitness Actually Is</h2>
        <p>Mobile dog fitness, specifically professional slatmill training delivered to your home, is structured, measurable aerobic exercise. A trained handler brings a professional non-motorized treadmill to your driveway. Your dog runs at their own pace for a defined session. Every metric is tracked: distance covered, speed, calories burned, and session duration. The workout is consistent, repeatable, and calibrated to your dog's fitness level.</p>
        <p>There are no other dogs involved. No group dynamics. No stress from unfamiliar environments. Just your dog, doing the thing their body is built for, running, in a controlled, professional setting right outside your front door.</p>

        <h2>The Exercise Question: What Actually Tires Your Dog Out?</h2>
        <p>The central promise of both daycare and mobile fitness is the same: a tired dog. But the mechanism matters enormously.</p>
        <p>Daycare fatigue is largely neurological. A dog who comes home exhausted from daycare has typically been overstimulated, processing a constant stream of social signals, managing group dynamics, staying alert in a novel environment. That kind of mental exhaustion is real, but it is not the same as physical fitness. A dog who is neurologically depleted from daycare stress has not built cardiovascular capacity, burned meaningful calories, or strengthened their musculoskeletal system.</p>
        <p>Slatmill fatigue is physical. A dog who completes a 30-minute slatmill session has done genuine aerobic work. Their heart rate has been elevated, their muscles have been engaged, and their cardiovascular system has been stimulated in the way that builds real fitness over time. The tiredness that follows is the kind that accumulates into better health outcomes, lower weight, stronger heart, more stable energy levels.</p>

        <h2>The Stress Factor</h2>
        <p>This is where the honest comparison gets uncomfortable for daycare advocates. Research on canine stress physiology has found that many dogs who appear to be enjoying daycare are actually operating at elevated cortisol levels throughout the day. A 2018 study published in <em>Physiology and Behavior</em> found that dogs in group care settings showed significantly elevated stress hormones compared to dogs in home environments, even when they appeared to be playing and engaging socially.</p>
        <p>For social, confident dogs who genuinely enjoy group play, this stress response may be manageable. For dogs who are anxious, reactive, or simply more introverted, daycare stress can accumulate into behavioral problems, disrupted sleep, and a weakened immune response over time.</p>
        <p>Mobile fitness sessions involve none of these stressors. Your dog stays in their own environment, works with a single familiar handler, and goes back inside when the session is done.</p>

        <h2>The Disease and Injury Risk</h2>
        <p>Group dog environments carry inherent health risks. Kennel cough (Bordetella) spreads readily in group settings even in vaccinated dogs. Canine influenza, giardia, and intestinal parasites are all documented risks in daycare environments. Play injuries, sprains, strains, bite wounds, are common in unsupervised or poorly supervised group play.</p>
        <p>Slatmill sessions eliminate group disease transmission risk entirely. Your dog interacts with one handler and one piece of equipment. The infection vector simply does not exist.</p>

        <h2>The Cost Comparison</h2>
        <p>Dog daycare in Hamilton County typically runs between $30 and $45 per day. For owners who use daycare three to five days per week, that represents $400 to $900 per month, year round.</p>
        <p>The Canine Gym's Standard Membership provides four 30-minute professional slatmill sessions per month for $180. Our Pro Membership delivers eight sessions for $340. For dog owners who are using daycare primarily as an exercise solution rather than a childcare necessity, the cost-per-unit-of-actual-exercise comparison is not close.</p>

        <h2>When Daycare Makes Sense</h2>
        <p>This is not an argument that daycare is always the wrong choice. Daycare serves a genuine purpose for dogs who need company during long days, who are genuinely social and thrive in group settings, or whose owners have schedules that require supervised daytime care. A well-run facility with experienced staff, appropriate group sizes, and genuine supervision is a real service.</p>
        <p>The question is whether daycare is solving your dog's actual problem. If your dog is overweight, under-conditioned, or behaviorally difficult because of unmet exercise needs, daycare is unlikely to fully address those issues. Structured, measurable aerobic exercise will.</p>

        <h2>The Bottom Line</h2>
        <p>For physical fitness, weight management, cardiovascular health, and measurable exercise, mobile slatmill training delivers results that group daycare cannot reliably match. For dogs who need daytime supervision or genuine socialization with other dogs, daycare fills a different need.</p>
        <p>Many of our clients in Hamilton County use The Canine Gym as a complement to daycare, or as a replacement for it when exercise, not supervision, was the primary goal all along. If you want to know what consistent, professional exercise actually does for your dog, the answer is in the data we track after every session.</p>
        <p>We serve <a href="/carmel">Carmel</a>, <a href="/fishers">Fishers</a>, <a href="/westfield">Westfield</a>, <a href="/noblesville">Noblesville</a>, <a href="/zionsville">Zionsville</a>, and <a href="/geist">Geist</a>. <a href="https://app.thecaninegym.com">Book a session</a> and see the difference structured exercise makes.</p>
      </>
    ),
  },
]

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `${BASE}/blog/${post.slug}`,
    },
    openGraph: {
      url: `${BASE}/blog/${post.slug}`,
      title: post.metaTitle,
      type: 'article',
      publishedTime: post.dateIso,
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const postIndex = posts.findIndex((p) => p.slug === slug)
  const prevPost = postIndex > 0 ? posts[postIndex - 1] : null
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.dateIso,
    dateModified: post.dateIso,
    author: {
      '@type': 'Organization',
      name: 'The Canine Gym',
      url: BASE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Canine Gym',
      url: BASE,
      logo: { '@type': 'ImageObject', url: `${BASE}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/${post.slug}` },
    image: `${BASE}/og-image.png`,
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", color: '#111', backgroundColor: 'white' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <style>{`
        .post-content h2 { font-size: clamp(20px, 2.5vw, 24px); font-weight: 800; color: #2c5a9e; margin: 40px 0 16px 0; letter-spacing: -0.3px; }
        .post-content h3 { font-size: 18px; font-weight: 700; color: #111; margin: 28px 0 10px 0; }
        .post-content p { color: #444; line-height: 1.8; font-size: 16px; margin: 0 0 18px 0; }
        .post-content strong { color: #111; }
        .post-content a { color: #f88124; text-decoration: underline; font-weight: 600; }
        .post-content a:hover { color: #e07010; }
        .post-content em { font-style: italic; }
      `}</style>
      <Nav />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #2c5a9e 0%, #3d70c0 100%)', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <span style={{ backgroundColor: 'rgba(248,129,36,0.25)', color: '#f88124', fontSize: '12px', fontWeight: '700', padding: '4px 14px', borderRadius: '20px', display: 'inline-block', marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase' }}>{post.category}</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: '800', margin: '0 0 20px 0', lineHeight: 1.2, letterSpacing: '-0.5px' }}>{post.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Clock size={14} /> {post.readTime}</span>
            <span>{post.date}</span>
            <span>The Canine Gym</span>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article style={{ padding: '64px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          {/* BACK LINK */}
          <a href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#999', fontSize: '13px', fontWeight: '600', textDecoration: 'none', marginBottom: '40px' }}>
            <ArrowLeft size={14} /> Back to Blog
          </a>

          {/* INTRO */}
          <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#333', fontWeight: '500', margin: '0 0 32px 0', paddingBottom: '32px', borderBottom: '2px solid #f8f9fa' }}>
            {post.intro}
          </p>

          {/* MAIN CONTENT */}
          <div className="post-content">
            {post.content}
          </div>

          {/* FAQ SECTION */}
          <div style={{ marginTop: '56px', paddingTop: '40px', borderTop: '2px solid #f8f9fa' }}>
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: '800', color: '#2c5a9e', margin: '0 0 28px 0', letterSpacing: '-0.3px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {post.faq.map((item, i) => (
                <div key={i} style={{ backgroundColor: '#f8f9fa', borderRadius: '12px', padding: '24px', border: '1px solid #eee' }}>
                  <p style={{ fontWeight: '700', fontSize: '16px', color: '#111', margin: '0 0 10px 0' }}>{item.q}</p>
                  <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA BOX */}
          <div style={{ marginTop: '56px', backgroundColor: '#eef2fb', borderRadius: '16px', padding: '36px', textAlign: 'center', border: '1px solid #c8d4f0' }}>
            <PawPrint size={36} color="#2c5a9e" style={{ marginBottom: '16px', opacity: 0.6 }} />
            <h3 style={{ fontWeight: '800', fontSize: '20px', color: '#2c5a9e', margin: '0 0 10px 0' }}>Give Your Dog a Real Workout</h3>
            <p style={{ color: '#555', fontSize: '15px', margin: '0 0 20px 0', lineHeight: 1.6 }}>The Canine Gym brings professional slatmill sessions to your driveway in Hamilton County. No driving, no drop-offs. Just results.</p>
            <a href="https://app.thecaninegym.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#f88124', color: 'white', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
              <PawPrint size={16} /> Book a Session
            </a>
          </div>

          {/* PREV / NEXT */}
          {(prevPost || nextPost) && (
            <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: prevPost && nextPost ? '1fr 1fr' : '1fr', gap: '16px' }}>
              {prevPost && (
                <a href={`/blog/${prevPost.slug}`} style={{ display: 'flex', flexDirection: 'column', gap: '6px', backgroundColor: '#f8f9fa', borderRadius: '12px', padding: '20px', textDecoration: 'none', border: '1px solid #eee' }}>
                  <span style={{ color: '#999', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}><ArrowLeft size={12} /> Previous</span>
                  <span style={{ color: '#2c5a9e', fontWeight: '700', fontSize: '14px', lineHeight: 1.4 }}>{prevPost.title}</span>
                </a>
              )}
              {nextPost && (
                <a href={`/blog/${nextPost.slug}`} style={{ display: 'flex', flexDirection: 'column', gap: '6px', backgroundColor: '#f8f9fa', borderRadius: '12px', padding: '20px', textDecoration: 'none', border: '1px solid #eee', textAlign: 'right' }}>
                  <span style={{ color: '#999', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>Next <ArrowRight size={12} /></span>
                  <span style={{ color: '#2c5a9e', fontWeight: '700', fontSize: '14px', lineHeight: 1.4 }}>{nextPost.title}</span>
                </a>
              )}
            </div>
          )}

        </div>
      </article>

      <Footer />
    </div>
  )
}