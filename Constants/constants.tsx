import Check from "@/public/icons/Check";
import Circle from "@/public/icons/Circle";
import Shield from "@/public/icons/Shield";
import Star from "@/public/icons/Star";

const PriceHeading = 'Simple pricing for your business';
const PriceText = 'Plans that are carefully crafted to suit your business';
const Premium_Pro = "Premium PRO";
const Price = '$329';
const BILLED_JUST_ONCE = "Billed just once";
const ACCESS_FEATURES = 'Access these features when you get this pricing package for your business';

const ListData = [
    {
        name: 'International calling and messaging API',
        icon: Check
    },
    {
        name: 'Additional phone numbers',
        icon: Check
    },
    {
        name: 'Automated messages via Zapier',
        icon: Check
    },
    {
        name: '24/7 support and consulting',
        icon: Check
    }

]

const subscriptions = [
    {
        name: '30 days money back Guarantee',
        icon: <Star />
    },
    {
        name: 'No setup fees 100% hassle - free',
        icon: <Shield />
    },
    {
        name: 'No monthly subscription Pay once and for all',
        icon: <Circle />
    },

]

export { PriceHeading, PriceText, Premium_Pro, Price, BILLED_JUST_ONCE, ACCESS_FEATURES, ListData, subscriptions }