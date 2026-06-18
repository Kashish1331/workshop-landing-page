import {
  Calendar,
  Users,
  Monitor,
  IndianRupee,
  Rocket
} from "lucide-react"

const WorkshopDetails = () => {

const details=[

{
icon:<Users size={28}/>,
title:"Age Group",
value:"8-14 Years"
},

{
icon:<Calendar size={28}/>,
title:"Duration",
value:"4 Weeks"
},

{
icon:<Monitor size={28}/>,
title:"Mode",
value:"Online"
},

{
icon:<IndianRupee size={28}/>,
title:"Fee",
value:"₹2,999"
},

{
icon:<Rocket size={28}/>,
title:"Start Date",
value:"15 July 2026"
}

]

return(

<section
id="details"
className="py-24 bg-gray-50"
>

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center mb-16">

Workshop Details

</h2>

<div className="grid md:grid-cols-5 gap-8">

{details.map((item)=>(

<div

key={item.title}

className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"

>

<div className="text-blue-600 mb-4">

{item.icon}

</div>

<h3 className="font-bold text-xl mb-2">

{item.title}

</h3>

<p className="text-gray-600">

{item.value}

</p>

</div>

))}

</div>

</div>

</section>

)

}

export default WorkshopDetails