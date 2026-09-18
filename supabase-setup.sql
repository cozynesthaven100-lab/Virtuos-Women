-- Virtuous Women of Destiny admin: run this once in Supabase > SQL Editor > New query.
-- Safe to run again; it will not delete existing data.

-- ========== Tables ==========
create table if not exists public.programmes (
  id uuid primary key default gen_random_uuid(),
  kind text not null default 'programme' check (kind in ('programme','activity')),
  title text not null,
  description text,
  event_date date,
  event_time time,
  location text,
  image_url text,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.leaders (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  bio text,
  photo_url text,
  sort_order int not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.gallery (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  storage_path text,
  caption text,
  album text,
  created_at timestamptz not null default now()
);

create table if not exists public.page_content (
  id uuid primary key default gen_random_uuid(),
  page text not null,
  section_key text not null,
  label text,
  field_type text not null default 'text' check (field_type in ('text','textarea','image')),
  content text,
  updated_at timestamptz not null default now(),
  unique (page, section_key)
);

create or replace function public.touch_updated_at() returns trigger
language plpgsql as $$ begin new.updated_at = now(); return new; end $$;

drop trigger if exists page_content_touch on public.page_content;
create trigger page_content_touch before update on public.page_content
for each row execute function public.touch_updated_at();

-- ========== Row level security ==========
-- Visitors can only READ published content. Signed-in admins can do everything.
alter table public.programmes   enable row level security;
alter table public.leaders      enable row level security;
alter table public.gallery      enable row level security;
alter table public.page_content enable row level security;

drop policy if exists "Public reads published programmes" on public.programmes;
create policy "Public reads published programmes" on public.programmes for select using (is_published);
drop policy if exists "Admins manage programmes" on public.programmes;
create policy "Admins manage programmes" on public.programmes for all to authenticated using (true) with check (true);

drop policy if exists "Public reads published leaders" on public.leaders;
create policy "Public reads published leaders" on public.leaders for select using (is_published);
drop policy if exists "Admins manage leaders" on public.leaders;
create policy "Admins manage leaders" on public.leaders for all to authenticated using (true) with check (true);

drop policy if exists "Public reads gallery" on public.gallery;
create policy "Public reads gallery" on public.gallery for select using (true);
drop policy if exists "Admins manage gallery" on public.gallery;
create policy "Admins manage gallery" on public.gallery for all to authenticated using (true) with check (true);

drop policy if exists "Public reads page content" on public.page_content;
create policy "Public reads page content" on public.page_content for select using (true);
drop policy if exists "Admins manage page content" on public.page_content;
create policy "Admins manage page content" on public.page_content for all to authenticated using (true) with check (true);

-- ========== Photo storage ==========
insert into storage.buckets (id, name, public)
values ('vwd-media', 'vwd-media', true)
on conflict (id) do nothing;

drop policy if exists "Public views media" on storage.objects;
create policy "Public views media" on storage.objects for select using (bucket_id = 'vwd-media');
drop policy if exists "Admins upload media" on storage.objects;
create policy "Admins upload media" on storage.objects for insert to authenticated with check (bucket_id = 'vwd-media');
drop policy if exists "Admins update media" on storage.objects;
create policy "Admins update media" on storage.objects for update to authenticated using (bucket_id = 'vwd-media');
drop policy if exists "Admins delete media" on storage.objects;
create policy "Admins delete media" on storage.objects for delete to authenticated using (bucket_id = 'vwd-media');

-- ========== After running this ==========
-- 1. Authentication > Sign In / Providers: turn OFF "Allow new users to sign up".
--    (Any signed-in user can edit content, so only people you add should be able to sign in.)
-- 2. Authentication > Users > Add user: create the admin account(s) with email + password.
