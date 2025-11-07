import ConnectMongoose from "@/utilis/connectMongoose";
import Member from "@/models/Member";
import Portfolio from "@/models/Portfolio";
import Project from "@/models/Project";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await ConnectMongoose();
    const userCount = await User.countDocuments();
    const memberCount = await Member.countDocuments();
    const portfolioCount = await Portfolio.countDocuments();
    const constructionResidentialCount = await Project.countDocuments({
      category: "Construction",
      subCategory: "Residential",
    });

    const constructionCommercialCount = await Project.countDocuments({
      category: "Construction",
      subCategory: "Commercial",
    });

    const interiorResidentialCount = await Project.countDocuments({
      category: "Interior",
      subCategory: "Residential",
    });

    const interiorCommercialCount = await Project.countDocuments({
      category: "Interior",
      subCategory: "Commercial",
    });
    return NextResponse.json(
      {
        success:true,
        data: {
          userCount,
          memberCount,
          portfolioCount,
          constructions: {
            residential: constructionResidentialCount,
            commercial: constructionCommercialCount,
          },
          interiors: {
            residential: interiorResidentialCount,
            commercial: interiorCommercialCount,
          },
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Dashboard API Error:", err);
    return NextResponse.json({ err: "Could not fetch data" }, { status: 500 });
  }
}
