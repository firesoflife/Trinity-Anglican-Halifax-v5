import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getWorship(): Promise<Worship> {
	return client.fetch(
		groq`*[_type == "worship"]{
        pageTitle,
        slug,
        bannerVerse,
        bannerVerseAttribution,
        expectVerse,
        expectVerseAttribution,
        scheduleBannerVerse,
        scheduleBannerVerseAtt,
        regularScheduleHeader,
        specialScheduleHeader,
        mainContent,
        item1,
        item1Content,
        item2,
        item2Content,
        item3,
        item3Content,
        bannerImage{
        asset->{
            _id,
            url
        },
        crop,
        hotspot
        },
        expectImage{
        asset->{
            _id,
            url
        },
        crop,
        hotspot
        },
        scheduleImage{
        asset->{
            _id,
            url
        },
        crop,
        hotspot
        }
      }[0]`
	);
}
