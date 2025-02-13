export {};

declare global {
    interface CouponEvent {
        home_team: string;
        away_team: string;
        type: string;
        details: string;
        odds: number;
    }

    interface Coupon {
        type: string;
        details: string;
        odds: number;
        stake: number;
        advice: string;
        events: CouponEvent[];
    }

    interface CouponData {
        coupons: Coupon[];
        global_advice: string;
    }
}