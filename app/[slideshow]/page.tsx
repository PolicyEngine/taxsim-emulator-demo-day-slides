import { getAllSlideshowMetadata, getSlideshowById } from '@/lib/slideshows';
import SlideshowViewer from '@/components/SlideshowViewer';
import { redirect } from 'next/navigation';

export function generateStaticParams() {
  return getAllSlideshowMetadata().map(s => ({ slideshow: s.id }));
}

export default async function SlideshowPage({ params }: { params: Promise<{ slideshow: string }> }) {
  const { slideshow: slideshowId } = await params;
  const slideshow = getSlideshowById(slideshowId);

  if (!slideshow) {
    redirect('/');
  }

  return (
    <SlideshowViewer slideCount={slideshow.slides.length} slideshowId={slideshowId}>
      {slideshow.slides.map((SlideComponent, index) => (
        <SlideComponent key={index} />
      ))}
    </SlideshowViewer>
  );
}
