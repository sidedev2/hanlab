import { supabase } from './supabase';

export async function getGalleryItems() {
  const { data, error } = await supabase.from('gallery').select('*'); // "gallery" 테이블의 모든 값 가져오기
  if (error) {
    console.error('데이터 패칭 실패', error);
    return [];
  }
  console.log('데이터 패칭 성공', data);
  return data;
}
